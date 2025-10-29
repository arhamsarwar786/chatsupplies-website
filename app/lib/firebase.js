// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQXMCf2E8dx9UdUc8mAcx4tKM3MnVdArY",
  authDomain: "chatsupplies-temp.firebaseapp.com",
  projectId: "chatsupplies-temp",
  storageBucket: "chatsupplies-temp.firebasestorage.app",
  messagingSenderId: "24581711005",
  appId: "1:24581711005:web:84848222b1b02341eaa074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

// Export everything you might need
export { auth, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup };
export default app;