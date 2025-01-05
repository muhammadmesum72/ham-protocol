// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBTH2zoCUs5M6Ms0XmUeLggW0QwmJqysU",
  authDomain: "ham-staking.firebaseapp.com",
  projectId: "ham-staking",
  storageBucket: "ham-staking.firebasestorage.app",
  messagingSenderId: "110894497528",
  appId: "1:110894497528:web:820a087cdd5a6c902c450d",
  measurementId: "G-JPMR4F24WC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
