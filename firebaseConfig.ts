// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2BlKsuu-fQ8eUiucr6b2ZfwEk9uf9ePk",
  authDomain: "vyre-a6527.firebaseapp.com",
  projectId: "vyre-a6527",
  storageBucket: "vyre-a6527.appspot.com",
  messagingSenderId: "891730798790",
  appId: "1:891730798790:web:4cb50dae070b33236ccfc7",
  measurementId: "G-2HR0NJ0Y0S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
export const FIREBASE_DB = getFirestore(app)