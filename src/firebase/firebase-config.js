import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREDB_apiKey,
  authDomain: process.env.REACT_APP_FIREDB_authDomain,
  projectId: process.env.REACT_APP_FIREDB_projectId,
  storageBucket: process.env.REACT_APP_FIREDB_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREDB_messagingSenderId,
  appId:  process.env.REACT_APP_FIREDB_appId
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}