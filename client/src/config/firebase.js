// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔥 Paste your Firebase config here
const firebaseConfig = {
 apiKey: "AIzaSyCNB3H1RkfJyJUurq19WtzHbmBrhSvnQHo",
  authDomain: "portfolio-c04d3.firebaseapp.com",
  projectId: "portfolio-c04d3",
  storageBucket: "portfolio-c04d3.firebasestorage.app",
  messagingSenderId: "151841272539",
  appId: "1:151841272539:web:7befaf1328d9e991c8d2fe",
  measurementId: "G-P68X9TMLSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ IMPORTANT: export db
export const db = getFirestore(app);