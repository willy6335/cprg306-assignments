import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBHCNuxtg-I-AFNhmjoVl7JdvyUa-JU1TU",
  authDomain: "week-9-shopping-list.firebaseapp.com",
  projectId: "week-9-shopping-list",
  storageBucket: "week-9-shopping-list.firebasestorage.app",
  messagingSenderId: "866385413709",
  appId: "1:866385413709:web:20c71e9ba6b75e5ebafe04",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);