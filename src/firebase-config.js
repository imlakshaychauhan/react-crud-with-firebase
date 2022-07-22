import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "crud-f4ea8.firebaseapp.com",
    projectId: "crud-f4ea8",
    storageBucket: "crud-f4ea8.appspot.com",
    messagingSenderId: "908811900501",
    appId: "1:908811900501:web:276473f561584d07d626dc",
    measurementId: "G-460NYDHKZF"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore();