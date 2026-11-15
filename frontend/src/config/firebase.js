import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyA8ctA8ItyHvTQvAIyS5WAKs9x1qqtmB1c",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "personal-aff2c.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "personal-aff2c",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "personal-aff2c.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "413724018794",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:413724018794:web:e276d8d89001de81cbe213",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-LTTETX9ELZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
