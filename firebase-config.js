// firebase-config.js

const firebaseConfig = {
  apiKey: "PASTE YOUR API KEY HERE", 
  authDomain: "PASTE YOUR AUTH DOMAIN HERE",
  projectId: "PASTE PROJECT ID",
  storageBucket: "PASTE STORAGE BUCKET",
  messagingSenderId: "PASTE SENDER ID HERE",
  appId: "PASTE APP ID HERE",
  measurementId: "PASTE MEASUREMENT ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set up the Auth and Database variables for all pages to use
const auth = firebase.auth();
const db = firebase.firestore();
