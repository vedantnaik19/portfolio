
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCKCBv9ciUihKrueoH9fRx69d_3Ob4PstY",
  authDomain: "portfolio-website-vedant.firebaseapp.com",
  projectId: "portfolio-website-vedant",
  storageBucket: "portfolio-website-vedant.appspot.com",
  messagingSenderId: "429318119969",
  appId: "1:429318119969:web:afcdcadf1be24205d1f960",
  measurementId: "G-27MQTSTWG8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);