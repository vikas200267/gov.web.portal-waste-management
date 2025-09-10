import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlLsorZJMl6f6TnVy4SEC5GzjWkTJUCEw",
  authDomain: "smartwastesystem1-c2cbe.firebaseapp.com",
  databaseURL: "https://smartwastesystem1-c2cbe-default-rtdb.firebaseio.com",
  projectId: "smartwastesystem1-c2cbe",
  storageBucket: "smartwastesystem1-c2cbe.firebasestorage.app",
  messagingSenderId: "471984293877",
  appId: "1:471984293877:web:94df26a099fb65447142bc",
  measurementId: "G-CNSFEJC7LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

// Initialize Analytics (will only work in supported browsers)
try {
  getAnalytics(app);
} catch (error) {
  console.log('Analytics not supported in this environment');
}