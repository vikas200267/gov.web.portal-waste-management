import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

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

// Function to read data from Firebase
async function readFirebaseData() {
  try {
    // Try to read from root to see all available nodes
    const rootRef = ref(database);
    const rootSnapshot = await get(rootRef);
    
    if (rootSnapshot.exists()) {
      console.log("Firebase database structure:");
      console.log(JSON.stringify(rootSnapshot.val(), null, 2));
    } else {
      console.log("No data available at root level");
    }
    
    // Try to read from both paths to see which one has data
    const wasteDataRef = ref(database, 'wasteData');
    const wasteDataSnapshot = await get(wasteDataRef);
    
    const waste_dataRef = ref(database, 'waste_data');
    const waste_dataSnapshot = await get(waste_dataRef);
    
    console.log("\nChecking specific paths:");
    console.log("Path 'wasteData' exists:", wasteDataSnapshot.exists());
    console.log("Path 'waste_data' exists:", waste_dataSnapshot.exists());
    
    // Print out sample data from each path if available
    if (wasteDataSnapshot.exists()) {
      const data = wasteDataSnapshot.val();
      const firstKey = Object.keys(data)[0];
      console.log("\nSample data from 'wasteData':", firstKey, "=>", data[firstKey]);
    }
    
    if (waste_dataSnapshot.exists()) {
      const data = waste_dataSnapshot.val();
      const firstKey = Object.keys(data)[0];
      console.log("\nSample data from 'waste_data':", firstKey, "=>", data[firstKey]);
    }
    
  } catch (error) {
    console.error("Error reading from Firebase:", error);
  }
}

// Execute the read operation
readFirebaseData();
