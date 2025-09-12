// Mock authentication service for development when Firebase authentication is not enabled
// This simulates Firebase authentication behavior for local development

import { User } from '../types';

// Store for mock users
const mockUsers: Record<string, { email: string, password: string, userData: User }> = {
  // Pre-defined test user
  'test@example.com': {
    email: 'test@example.com',
    password: 'password123',
    userData: {
      id: 'test-user-id-123',
      email: 'test@example.com',
      name: 'Test User',
      createdAt: Date.now(),
      lastLogin: Date.now()
    }
  }
};

// Mock sign in
export const mockSignIn = async (email: string, password: string): Promise<{ user: any }> => {
  console.log('MOCK AUTH: Attempting to sign in with:', email);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Check if user exists
  const user = mockUsers[email.toLowerCase()];
  if (!user) {
    console.log('MOCK AUTH: User not found');
    throw {
      code: 'auth/user-not-found',
      message: 'No user found with this email.'
    };
  }
  
  // Check password
  if (user.password !== password) {
    console.log('MOCK AUTH: Invalid password');
    throw {
      code: 'auth/wrong-password',
      message: 'Invalid password provided.'
    };
  }
  
  console.log('MOCK AUTH: User authenticated successfully');
  
  // Update last login
  user.userData.lastLogin = Date.now();
  
  // Return mock user credential similar to Firebase
  return {
    user: {
      uid: user.userData.id,
      email: user.userData.email,
      displayName: user.userData.name,
      emailVerified: true,
      metadata: {
        creationTime: new Date(user.userData.createdAt).toISOString(),
        lastSignInTime: new Date(user.userData.lastLogin).toISOString()
      },
      // Add minimal methods that might be called
      reload: async () => Promise.resolve(),
      getIdToken: async () => 'mock-id-token-123'
    }
  };
};

// Mock registration
export const mockRegister = async (email: string, password: string, name: string): Promise<{ user: any }> => {
  console.log('MOCK AUTH: Attempting to register user:', email);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Check if user already exists
  if (mockUsers[email.toLowerCase()]) {
    console.log('MOCK AUTH: Email already in use');
    throw {
      code: 'auth/email-already-in-use',
      message: 'Email address is already in use.'
    };
  }
  
  // Create new user ID (simple mock)
  const userId = `user-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
  
  // Create user data
  const timestamp = Date.now();
  const userData: User = {
    id: userId,
    email,
    name,
    createdAt: timestamp,
    lastLogin: timestamp
  };
  
  // Store in mock database
  mockUsers[email.toLowerCase()] = {
    email: email.toLowerCase(),
    password,
    userData
  };
  
  console.log('MOCK AUTH: User registered successfully:', userId);
  
  // Return mock user credential similar to Firebase
  return {
    user: {
      uid: userId,
      email,
      displayName: name,
      emailVerified: true,
      metadata: {
        creationTime: new Date(timestamp).toISOString(),
        lastSignInTime: new Date(timestamp).toISOString()
      },
      // Add minimal methods that might be called
      reload: async () => Promise.resolve(),
      getIdToken: async () => 'mock-id-token-123'
    }
  };
};

// Mock auth state observer
export const mockOnAuthStateChanged = (callback: (user: any | null) => void) => {
  // For development, we'll always return the test user as authenticated
  // This simulates being logged in
  
  // Get the last active user from local storage if available
  const storedUser = localStorage.getItem('mockAuthUser');
  
  if (storedUser) {
    try {
      const userData = JSON.parse(storedUser);
      const mockUserObj = {
        uid: userData.id,
        email: userData.email,
        displayName: userData.name,
        emailVerified: true,
        metadata: {
          creationTime: new Date(userData.createdAt || Date.now()).toISOString(),
          lastSignInTime: new Date(userData.lastLogin || Date.now()).toISOString()
        },
        reload: async () => Promise.resolve(),
        getIdToken: async () => 'mock-id-token-123'
      };
      
      setTimeout(() => callback(mockUserObj), 100);
    } catch (e) {
      console.error('MOCK AUTH: Error parsing stored user:', e);
      setTimeout(() => callback(null), 100);
    }
  } else {
    // No stored user, return not authenticated
    setTimeout(() => callback(null), 100);
  }
  
  // Return mock unsubscribe function
  return () => {
    console.log('MOCK AUTH: Auth state observer unsubscribed');
  };
};

// Mock sign out
export const mockSignOut = async () => {
  console.log('MOCK AUTH: User signed out');
  localStorage.removeItem('mockAuthUser');
  return Promise.resolve();
};

// Store user in localStorage to persist "session"
export const setMockAuthUser = (user: User) => {
  localStorage.setItem('mockAuthUser', JSON.stringify(user));
};

// Get current mock user
export const getMockCurrentUser = () => {
  const storedUser = localStorage.getItem('mockAuthUser');
  
  if (storedUser) {
    try {
      return JSON.parse(storedUser);
    } catch (e) {
      console.error('MOCK AUTH: Error parsing stored user:', e);
      return null;
    }
  }
  
  return null;
};

// Check if we're using mock auth
export const isMockAuthEnabled = () => {
  return process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';
};