import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { 
  createUserWithVerification,
  signInUser,
  signOutUser, 
  getCurrentUser,
  checkUserExists,
  sendVerificationEmail as sendVerificationEmailService,
  isValidGoogleEmail
} from '../services/userService';
import { auth } from '../config/firebase';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  loading: boolean;
  checkUserExists: (email: string) => Promise<boolean>;
  sendVerificationEmail: () => Promise<boolean>;
  isEmailVerified: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // Check for existing auth session on initial load and listen for auth state changes
  useEffect(() => {
    console.log('Setting up auth state listener');
    let isMounted = true; // Flag to prevent state updates if the component unmounts
    
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      console.log('Auth state changed:', firebaseUser ? `User ${firebaseUser.uid}` : 'No user');
      
      if (!isMounted) return; // Don't update state if component is unmounted
      setLoading(true);
      
      try {
        if (firebaseUser) {
          console.log('Current Firebase user:', {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            emailVerified: firebaseUser.emailVerified,
            displayName: firebaseUser.displayName,
            isAnonymous: firebaseUser.isAnonymous,
            providerData: firebaseUser.providerData
          });
          
          // Force refresh token to ensure we have the latest emailVerified status
          try {
            await firebaseUser.reload();
            console.log('User reloaded. Updated email verified status:', firebaseUser.emailVerified);
          } catch (reloadError) {
            console.error('Error reloading user:', reloadError);
            // Continue with the current user state even if reload fails
          }
          
          if (!isMounted) return; // Check again after async operations
          setIsEmailVerified(firebaseUser.emailVerified);
          
          // Get additional user data from the database
          const currentUser = await getCurrentUser();
          if (currentUser) {
            console.log('User data retrieved from database:', currentUser);
            if (isMounted) setUser(currentUser);
          } else {
            console.log('User authenticated but no database record found');
            // Create minimal user object from Firebase auth
            const minimalUser: User = {
              id: firebaseUser.uid,
              email: firebaseUser.email || '',
              name: firebaseUser.displayName || '',
              createdAt: Date.now(),
              lastLogin: Date.now()
            };
            if (isMounted) setUser(minimalUser);
          }
        } else {
          console.log('No authenticated user, clearing state');
          if (isMounted) {
            setUser(null);
            setIsEmailVerified(false);
          }
        }
      } catch (error) {
        console.error('Error processing auth state change:', error);
        if (isMounted) {
          setUser(null);
          setIsEmailVerified(false);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    });
    
    // Cleanup subscription and set mounted flag to false
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      console.log('Starting login process for:', email);
      const userData = await signInUser(email, password);
      
      if (userData) {
        console.log('User data received:', userData);
        setUser(userData);
        
        // Ensure we get the latest verification status
        if (auth.currentUser) {
          try {
            await auth.currentUser.reload();
            console.log('User reloaded after login. Email verified:', auth.currentUser.emailVerified);
          } catch (reloadError) {
            console.error('Failed to reload user after login:', reloadError);
            // Continue with available status
          }
        }
        
        // Check if email is verified
        const isVerified = auth.currentUser?.emailVerified || false;
        console.log('Final email verified status:', isVerified);
        setIsEmailVerified(isVerified);
        
        return true;
      }
      console.log('No user data returned from signInUser');
      return false;
    } catch (error) {
      console.error('Login error:', error);
      // Re-throw to handle in component
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      if (!name || !email || !password) {
        console.error('Missing required registration fields');
        throw new Error('Please fill in all required fields');
      }
      
      console.log('Starting registration process for:', email);
      
      // Validate if it's a valid email address
      if (!isValidGoogleEmail(email)) {
        console.error('Invalid email format:', email);
        throw new Error('Please enter a valid email address');
      }
      
      console.log('Creating new user account with verification...');
      // Create new user in Firebase with verification
      const userData = await createUserWithVerification(name, email, password);
      
      if (userData) {
        console.log('User registered successfully:', userData);
        setUser(userData);
        setIsEmailVerified(false); // Email needs verification
        
        console.log('Checking if verification email was sent...');
        if (auth.currentUser) {
          console.log('Current user exists, email verified status:', auth.currentUser.emailVerified);
        } else {
          console.warn('User created but auth.currentUser is null after registration');
        }
        
        return true;
      }
      
      console.error('Registration failed - no user data returned');
      throw new Error('Registration failed. Please try again.');
    } catch (error) {
      console.error('Registration error:', error);
      // Re-throw to handle in component
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  // Google sign-in functionality has been removed

  const sendVerificationEmail = async (): Promise<boolean> => {
    try {
      console.log('Sending verification email...');
      const result = await sendVerificationEmailService();
      console.log('Verification email sending result:', result);
      return result;
    } catch (error) {
      console.error('Error sending verification email:', error);
      return false;
    }
  };

  const logout = async (): Promise<boolean> => {
    setLoading(true);
    try {
      console.log('Attempting to log out user');
      const success = await signOutUser();
      if (success) {
        console.log('Logout successful');
        setUser(null);
        setIsEmailVerified(false);
      } else {
        console.log('Logout failed but no exception was thrown');
      }
      return success;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register,
      logout, 
      loading,
      checkUserExists,
      sendVerificationEmail,
      isEmailVerified
    }}>
      {children}
    </AuthContext.Provider>
  );
};