// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeQ6TPDl3PmAIdsV60HKxW-WL2wR5XV2A",
  authDomain: "todoit-5127b.firebaseapp.com",
  projectId: "todoit-5127b",
  storageBucket: "todoit-5127b.appspot.com",
  messagingSenderId: "1072704552240",
  appId: "1:1072704552240:web:3ebe71ddd872ad293edcf5",
  measurementId: "G-5JPBJPWQ5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// init components
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();