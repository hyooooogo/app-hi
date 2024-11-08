import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmzwFDJ2GdDKiVPDOl0Yem-qSs7wn_HOU",
  authDomain: "app-human-2ea73.firebaseapp.com",
  projectId: "app-human-2ea73",
  storageBucket: "app-human-2ea73.appspot.com",
  messagingSenderId: "445544600306",
  appId: "1:445544600306:web:2451301f68987143b6366b",
  measurementId: "G-KCX0RB2HP2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export  {auth, provider, db };