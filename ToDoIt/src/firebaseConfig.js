import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeQ6TPDl3PmAIdsV60HKxW-WL2wR5XV2A",
  authDomain: "todoit-5127b.firebaseapp.com",
  projectId: "todoit-5127b",
  storageBucket: "todoit-5127b.appspot.com",
  messagingSenderId: "1072704552240",
  appId: "1:1072704552240:web:3ebe71ddd872ad293edcf5",
  measurementId: "G-5JPBJPWQ5V"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
