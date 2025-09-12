import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Layout } from './components/Layout';
import { auth } from './config/firebase';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { VerificationPage } from './components/auth/VerificationPage';
import { Dashboard } from './components/dashboard/Dashboard';
import { Analytics } from './components/analytics/Analytics';
import { About } from './components/about/About';

// Add console logs to help debug authentication issues
console.log('App component is loading...');

// Add a utility function to help debug auth state
function logAuthState() {
  if (auth.currentUser) {
    console.log('Current auth user:', {
      uid: auth.currentUser.uid,
      email: auth.currentUser.email,
      emailVerified: auth.currentUser.emailVerified,
      displayName: auth.currentUser.displayName,
      isAnonymous: auth.currentUser.isAnonymous,
      providerData: auth.currentUser.providerData
    });
  } else {
    console.log('No authenticated user');
  }
}

// Call this whenever useful
setTimeout(logAuthState, 1000);

// Loading spinner component to reuse
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
  </div>
);

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check for Firebase Auth user directly
  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('PrivateRoute direct auth check - User:', !!user);
      setIsAuthenticated(!!user);
      setChecking(false);
    });
    
    return () => unsubscribe();
  }, []);
  
  if (checking) {
    return <LoadingSpinner />;
  }
  
  // If user is not logged in, redirect to login
  if (!isAuthenticated) {
    console.log('User not logged in, redirecting to login');
    return <Navigate to="/login" replace />;
  }
  
  // Skip ALL email verification checks for development
  console.log('User authenticated directly via Firebase, rendering children');
  return <>{children}</>;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check for Firebase Auth user directly
  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('PublicRoute direct auth check - User:', !!user);
      setIsAuthenticated(!!user);
      setChecking(false);
    });
    
    return () => unsubscribe();
  }, []);
  
  if (checking) {
    return <LoadingSpinner />;
  }
  
  // Simplified routing: if Firebase user exists, go to dashboard directly
  if (isAuthenticated) {
    console.log('User logged in via Firebase, redirecting to dashboard');
    return <Navigate to="/dashboard" replace />;
  }
  
  console.log('No authenticated user in Firebase, rendering login/register page');
  return <>{children}</>;
};

// Special route just for the email verification page
const VerificationOnlyRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check for Firebase Auth user directly
  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('VerificationOnlyRoute direct auth check - User:', !!user);
      setIsAuthenticated(!!user);
      setChecking(false);
    });
    
    return () => unsubscribe();
  }, []);
  
  if (checking) {
    return <LoadingSpinner />;
  }
  
  // Only show verification page if user is logged in
  if (!isAuthenticated) {
    console.log('User not logged in via Firebase, redirecting to login from verification route');
    return <Navigate to="/login" replace />;
  }
  
  // For development: Always show the verification page if the user navigates here
  // with direct link to dashboard
  console.log('User logged in via Firebase, showing verification page with option to continue to dashboard');
  return <>{children}</>;
};

function AppContent() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        } />
        <Route path="/verify-email" element={
          <VerificationOnlyRoute>
            <VerificationPage />
          </VerificationOnlyRoute>
        } />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/analytics" element={
          <PrivateRoute>
            <Layout>
              <Analytics />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/about" element={
          <PrivateRoute>
            <Layout>
              <About />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;