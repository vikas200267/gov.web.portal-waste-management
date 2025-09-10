import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Firebase configuration
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
const database = getDatabase(app);

// Generate sample waste data
const generateSampleData = () => {
  const data = {};
  const now = new Date();
  const areaCodes = ['A001', 'A002', 'A003', 'A004', 'A005'];
  
  for (let i = 0; i < 30; i++) {
    const timestamp = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    const organicWeight = Math.random() * 50 + 10; // 10-60 kg
    const inorganicWeight = Math.random() * 40 + 5; // 5-45 kg
    
    data[`waste-${i}`] = {
      timestamp: timestamp.toISOString(),
      organicWeight: Math.round(organicWeight * 100) / 100,
      inorganicWeight: Math.round(inorganicWeight * 100) / 100,
      totalWeight: Math.round((organicWeight + inorganicWeight) * 100) / 100,
      humidity: Math.round((Math.random() * 40 + 30) * 100) / 100, // 30-70%
      temperature: Math.round((Math.random() * 20 + 15) * 100) / 100, // 15-35°C
      mq9: Math.round((Math.random() * 60 + 10) * 100) / 100, // 10-70 ppm
      mq7: Math.round((Math.random() * 50 + 5) * 100) / 100, // 5-55 ppm
      mq135: Math.round((Math.random() * 45 + 15) * 100) / 100, // 15-60 ppm
      areaCode: areaCodes[i % areaCodes.length],
    };
  }
  
  return data;
};

// Upload sample data to Firebase
const uploadSampleData = async () => {
  try {
    const sampleData = generateSampleData();
    const wasteDataRef = ref(database, 'wasteData');
    
    await set(wasteDataRef, sampleData);
    console.log('Sample data uploaded successfully to Firebase!');
    process.exit(0);
  } catch (error) {
    console.error('Error uploading sample data:', error);
    process.exit(1);
  }
};

// Execute the upload
uploadSampleData();
