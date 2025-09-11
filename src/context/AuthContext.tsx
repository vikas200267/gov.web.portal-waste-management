import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface UserWithPassword extends User {
  password: string;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user exists in registered users
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]') as UserWithPassword[];
      const existingUser = registeredUsers.find(u => u.email === email && u.password === password);
      
      if (existingUser) {
        // User exists and password matches
        const loggedInUser: User = {
          id: existingUser.id,
          email: existingUser.email,
          name: existingUser.name,
        };
        setUser(loggedInUser);
        localStorage.setItem('user', JSON.stringify(loggedInUser));
        return true;
      }
      
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (name && email && password) {
        // Check if email is already registered
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]') as UserWithPassword[];
        if (registeredUsers.some(u => u.email === email)) {
          return false; // Email already exists
        }
        
        // Create new user
        const newUser: UserWithPassword = {
          id: Date.now().toString(),
          email,
          name,
          password
        };
        
        // Add to registered users list
        registeredUsers.push(newUser);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
        // Log the user in
        const loggedInUser: User = {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name
        };
        setUser(loggedInUser);
        localStorage.setItem('user', JSON.stringify(loggedInUser));
        return true;
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // Note: We keep the registeredUsers in localStorage for future login attempts
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};