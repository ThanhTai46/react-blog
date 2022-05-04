import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCJ4DDQ8HnBPThQ2dyMuDceARMWQ-nSNeY",
  authDomain: "monkey-blogg.firebaseapp.com",
  projectId: "monkey-blogg",
  storageBucket: "monkey-blogg.appspot.com",
  messagingSenderId: "145810617967",
  appId: "1:145810617967:web:7a0b7578d8ac6dc5053f9a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
