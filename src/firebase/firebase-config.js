import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDFhHdMmdL6V-EuCaOlgMK2EWlfJ4AcZYM",
  authDomain: "react-blog-63906.firebaseapp.com",
  projectId: "react-blog-63906",
  storageBucket: "react-blog-63906.appspot.com",
  messagingSenderId: "774021624864",
  appId: "1:774021624864:web:46b8024be36764314f3845",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
