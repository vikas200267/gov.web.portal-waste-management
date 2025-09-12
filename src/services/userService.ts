import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  onAuthStateChanged,
  sendEmailVerification,
  fetchSignInMethodsForEmail
} from 'firebase/auth';
import { auth, database } from '../config/firebase';
import { ref, set, get, child } from 'firebase/database';
import { User } from '../types';

// Create a user in Firebase Authentication and store additional info in Realtime Database
export const createUser = async (name: string, email: string, password: string): Promise<User | null> => {
  try {
    // Validate if it's a Gmail address
    if (!isValidGoogleEmail(email)) {
      throw new Error('Please use a valid Gmail address');
    }
    
    // Create the user authentication record
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { uid } = userCredential.user;
    
    // Send verification email
    await sendEmailVerification(userCredential.user);
    
    // Create timestamp for user creation
    const timestamp = new Date().getTime();
    
    // Create the user profile in Realtime Database
    const userData: User = {
      id: uid,
      email,
      name,
      createdAt: timestamp,
      lastLogin: timestamp
    };
    
    // Store in Firebase Realtime Database under 'users' node
    await set(ref(database, `users/${uid}`), userData);
    
    return userData;
  } catch (error: any) {
    console.error('Error creating user:', error.message);
    return null;
  }
};

// Sign in user using Firebase Authentication
export const signInUser = async (email: string, password: string): Promise<User | null> => {
  try {
    console.log('Attempting to sign in with:', email);
    
    // Sign in with email and password
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    const { uid } = userCredential.user;
    console.log('Firebase auth successful for user:', uid);
    
    // Get user data from database
    const userSnapshot = await get(child(ref(database), `users/${uid}`));
    
    if (userSnapshot.exists()) {
      console.log('User data found in database');
      // Update last login timestamp
      const userData = userSnapshot.val();
      userData.lastLogin = new Date().getTime();
      
      // Update last login time in the database
      await set(ref(database, `users/${uid}/lastLogin`), userData.lastLogin);
      
      return userData as User;
    } else {
      console.error('User auth successful but data not found in database');
      // Create minimal user profile from auth data
      const minimalUserData: User = {
        id: uid,
        email: userCredential.user.email || '',
        name: userCredential.user.displayName || '',
        createdAt: Date.now(),
        lastLogin: Date.now()
      };
      
      // Save this data to database
      await set(ref(database, `users/${uid}`), minimalUserData);
      
      return minimalUserData;
    }
  } catch (error: any) {
    console.error('Error signing in:', error);
    // Re-throw the error to be handled by the calling code
    throw error;
  }
};

// Check if a user with this email already exists
export const checkUserExists = async (email: string): Promise<boolean> => {
  try {
    console.log('Checking if email exists:', email);
    const methods = await fetchSignInMethodsForEmail(auth, email);
    console.log('Sign-in methods for email:', methods);
    
    // If methods array has any entries, the email exists
    return methods.length > 0;
  } catch (error: any) {
    console.error('Error checking user existence:', error);
    // Only return false for auth/user-not-found which means the user doesn't exist
    if (error.code === 'auth/user-not-found') {
      return false;
    }
    // For other errors, throw to be handled by the caller
    throw error;
  }
};

// Sign out user
export const signOutUser = async (): Promise<boolean> => {
  try {
    await signOut(auth);
    return true;
  } catch (error: any) {
    console.error('Error signing out:', error.message);
    return false;
  }
};

// Get current user from Firebase Authentication
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      unsubscribe();
      
      if (firebaseUser) {
        // Get user data from Realtime Database
        const userSnapshot = await get(child(ref(database), `users/${firebaseUser.uid}`));
        
        if (userSnapshot.exists()) {
          resolve(userSnapshot.val() as User);
        } else {
          resolve(null);
        }
      } else {
        resolve(null);
      }
    });
  });
};

// Google Sign In functionality has been removed

// Send email verification to verify user's email address
export const sendVerificationEmail = async (): Promise<boolean> => {
  try {
    const currentUser = auth.currentUser;
    if (currentUser && !currentUser.emailVerified) {
      await sendEmailVerification(currentUser);
      return true;
    }
    return false;
  } catch (error: any) {
    console.error('Error sending verification email:', error.message);
    return false;
  }
};

// Check if an email is valid - this is a general validation
export const isValidGoogleEmail = (email: string): boolean => {
  try {
    // Basic email format validation
    // Allow most common email formats with standard TLDs
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(email);
    
    console.log(`Email validation for ${email}: ${isValid ? 'VALID' : 'INVALID'}`);
    return isValid;
  } catch (error) {
    console.error('Error validating email:', error);
    // If there's an error in the validation logic, default to accepting the email
    // to avoid blocking legitimate users
    return true;
  }
};

// Enhanced user creation with email verification
export const createUserWithVerification = async (name: string, email: string, password: string): Promise<User | null> => {
  try {
    console.log('Starting user creation with verification for:', email);
    
    // Check if it's a valid email format - more robust validation
    if (!isValidGoogleEmail(email)) {
      console.error('Invalid email format:', email);
      throw new Error('Please enter a valid email address');
    }
    
    // Check if user already exists
    try {
      const userExists = await checkUserExists(email);
      if (userExists) {
        console.warn(`User with email ${email} already exists`);
        throw new Error('Email already in use. Please try a different email or login instead.');
      }
    } catch (checkError: any) {
      // Only throw if it's not the "user-not-found" error (which means user doesn't exist, which is good)
      if (checkError.code !== 'auth/user-not-found') {
        console.error('Error checking if user exists:', checkError);
        throw checkError;
      }
    }
    
    // Create the user authentication record
    console.log('Creating Firebase Auth user...');
    let userCredential: UserCredential;
    
    try {
      userCredential = await createUserWithEmailAndPassword(auth, email, password);
    } catch (authError: any) {
      console.error('Error creating user in Firebase Auth:', authError);
      
      // Map Firebase error codes to user-friendly messages
      if (authError.code === 'auth/email-already-in-use') {
        throw new Error('This email is already registered. Please use a different email or login instead.');
      } else if (authError.code === 'auth/invalid-email') {
        throw new Error('Please enter a valid email address.');
      } else if (authError.code === 'auth/weak-password') {
        throw new Error('Password is too weak. Please choose a stronger password.');
      } else {
        throw new Error(authError.message || 'Failed to create account. Please try again later.');
      }
    }
    
    const { uid } = userCredential.user;
    console.log('User created successfully with ID:', uid);
    
    // Send verification email
    console.log('Sending verification email...');
    try {
      await sendEmailVerification(userCredential.user);
      console.log('Verification email sent successfully');
    } catch (verifyError: any) {
      console.error('Error sending verification email:', verifyError);
      // Continue with account creation even if verification email fails
      // This ensures the user account exists but will need verification later
    }
    
    // Create timestamp for user creation
    const timestamp = new Date().getTime();
    
    // Create the user profile in Realtime Database
    const userData: User = {
      id: uid,
      email,
      name,
      createdAt: timestamp,
      lastLogin: timestamp
    };
    
    // Store in Firebase Realtime Database under 'users' node
    try {
      await set(ref(database, `users/${uid}`), userData);
      console.log('User data saved to database successfully');
    } catch (dbError: any) {
      console.error('Error saving user data to database:', dbError);
      // If database save fails, we still want to return the user object
      // since the authentication part succeeded
    }
    
    return userData;
  } catch (error: any) {
    console.error('Error creating user with verification:', error);
    // Re-throw the error to be handled by the caller
    throw error;
  }
};