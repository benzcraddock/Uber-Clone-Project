import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
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

// export so other files have access to firebase app, google provider, and authentication
export { app, provider, auth };