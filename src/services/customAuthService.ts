import { database } from '../config/firebase';
import { ref, set, get, child } from 'firebase/database';
import { User } from '../types';
import * as crypto from 'crypto-js';

// Custom authentication service that directly uses Firebase Realtime Database
// instead of Firebase Authentication

// Helper function to hash passwords before storing them
const hashPassword = (password: string): string => {
  return crypto.SHA256(password).toString();
};

// Store the current authenticated user in local storage
const setCurrentUser = (user: User | null) => {
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }
};

// Get the current authenticated user from local storage
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('currentUser');
  if (userJson) {
    try {
      return JSON.parse(userJson);
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return null;
    }
  }
  return null;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

// Register a new user
export const registerUser = async (name: string, email: string, password: string): Promise<User> => {
  try {
    console.log('Starting custom registration process for:', email);
    
    // First check if user with this email already exists
    const usersRef = ref(database, 'users');
    const snapshot = await get(usersRef);
    
    if (snapshot.exists()) {
      const users = snapshot.val();
      // Check all users to find matching email
      for (const userId in users) {
        if (users[userId].email === email) {
          console.error('User with this email already exists');
          throw new Error('User with this email already exists');
        }
      }
    }
    
    // Generate a unique ID for the user
    const userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    // Create timestamp
    const timestamp = Date.now();
    
    // Create user object with hashed password
    const hashedPassword = hashPassword(password);
    
    // User object to be stored in database
    const userForDB = {
      id: userId,
      email,
      name,
      hashedPassword, // Store hashed password
      createdAt: timestamp,
      lastLogin: timestamp
    };
    
    // User object without password to return and store in local state
    const userForState: User = {
      id: userId,
      email,
      name,
      createdAt: timestamp,
      lastLogin: timestamp
    };
    
    // Save to Firebase Realtime Database
    await set(ref(database, `users/${userId}`), userForDB);
    
    console.log('User registered successfully:', userId);
    
    // Store authenticated user in local storage
    setCurrentUser(userForState);
    
    return userForState;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

// Login user
export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    console.log('Starting custom login process for:', email);
    
    // Get all users from database
    const usersRef = ref(database, 'users');
    const snapshot = await get(usersRef);
    
    if (!snapshot.exists()) {
      console.error('No users found in database');
      throw new Error('Invalid email or password');
    }
    
    const users = snapshot.val();
    let foundUser = null;
    
    // Check all users to find matching email
    for (const userId in users) {
      if (users[userId].email === email) {
        foundUser = users[userId];
        break;
      }
    }
    
    if (!foundUser) {
      console.error('User not found');
      throw new Error('Invalid email or password');
    }
    
    // Check password
    const hashedPassword = hashPassword(password);
    if (foundUser.hashedPassword !== hashedPassword) {
      console.error('Invalid password');
      throw new Error('Invalid email or password');
    }
    
    // Update last login time
    const timestamp = Date.now();
    await set(ref(database, `users/${foundUser.id}/lastLogin`), timestamp);
    
    // User object without password to return and store in local state
    const userForState: User = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      createdAt: foundUser.createdAt,
      lastLogin: timestamp
    };
    
    console.log('User logged in successfully:', foundUser.id);
    
    // Store authenticated user in local storage
    setCurrentUser(userForState);
    
    return userForState;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Logout user
export const logoutUser = (): void => {
  console.log('Logging out user');
  setCurrentUser(null);
};

// Check if email is valid (simple validation)
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Set up auth state listener (for components that need to react to auth state changes)
export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  // Initial call with current state
  callback(getCurrentUser());
  
  // Set up listener for storage events (in case user logs in/out in another tab)
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === 'currentUser') {
      callback(getCurrentUser());
    }
  };
  
  window.addEventListener('storage', handleStorageChange);
  
  // Return function to remove listener
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
};