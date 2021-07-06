import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyADcRagFv3UXRH9CFDZnXjQjOejHSqSTO8",
  authDomain: "react-app-curso-26908.firebaseapp.com",
  projectId: "react-app-curso-26908",
  storageBucket: "react-app-curso-26908.appspot.com",
  messagingSenderId: "34199529605",
  appId: "1:34199529605:web:b4520daa23cab9fcca21ec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}