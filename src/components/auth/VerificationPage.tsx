import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../config/firebase';
import { Recycle, Mail, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

export const VerificationPage: React.FC = () => {
  const { user, sendVerificationEmail, isEmailVerified, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log('VerificationPage - User state:', !!user, 'Email verified:', isEmailVerified);
    
    // We don't need manual navigation here anymore as the VerificationOnlyRoute 
    // component will handle redirects based on authentication state
  }, [user, isEmailVerified]);
  
  const handleResendVerification = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);
    
    try {
      console.log('Requesting verification email resend...');
      const success = await sendVerificationEmail();
      console.log('Verification email send result:', success);
      
      if (success) {
        setMessage('Verification email has been sent. Please check your inbox and spam folder.');
        
        // Reload current user to check verification status
        if (auth.currentUser) {
          try {
            await auth.currentUser.reload();
            console.log('User reloaded after sending verification email. Email verified status:', 
                      auth.currentUser.emailVerified);
          } catch (reloadError) {
            console.error('Failed to reload user after sending verification email:', reloadError);
          }
        }
      } else {
        setError('Failed to send verification email. Please try again in a few minutes.');
      }
    } catch (error: any) {
      console.error('Error sending verification email:', error);
      setError(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };
  
  if (!user) return null;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3">
              <Recycle className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">Email Verification</h1>
          <p className="text-blue-100 mt-1">Please verify your email address</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-full p-4">
              <Mail className="h-12 w-12 text-blue-600" />
            </div>
            
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">Verify Your Email</h2>
              <p className="mt-2 text-gray-600">
                We've sent a verification email to <span className="font-medium">{user.email}</span>.
                Please check your inbox and click the verification link to activate your account.
              </p>
            </div>
            
            {message && (
              <div className="w-full flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-green-700">{message}</p>
              </div>
            )}
            
            {error && (
              <div className="w-full flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            
            <button
              onClick={handleResendVerification}
              disabled={loading}
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg focus:ring-4 focus:ring-blue-200 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <RefreshCw className="animate-spin h-5 w-5 mr-2" />
                  Sending...
                </>
              ) : (
                'Resend Verification Email'
              )}
            </button>
            
            <div className="text-center mt-4 bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="text-sm text-gray-600 mb-2">
                <strong>DEVELOPMENT MODE</strong>: Email verification is bypassed
              </p>
              <Link
                to="/dashboard"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-medium inline-block transition-colors"
              >
                Continue to Dashboard →
              </Link>
              <p className="text-xs text-gray-500 mt-2">
                (In production, verification would be required)
              </p>
            </div>
            
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-gray-700 font-medium text-sm"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};