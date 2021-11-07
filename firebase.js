import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaYcuBzh3uEbTKfpu5mtj3MLilzO8OE10",
  authDomain: "uber-clone-project-d355b.firebaseapp.com",
  projectId: "uber-clone-project-d355b",
  storageBucket: "uber-clone-project-d355b.appspot.com",
  messagingSenderId: "894117248784",
  appId: "1:894117248784:web:eedada1e60ab72da622f95",
  measurementId: "G-WCKW4MZKVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };