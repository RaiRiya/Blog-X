// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-x-4aedb.firebaseapp.com",
  projectId: "blog-x-4aedb",
  storageBucket: "blog-x-4aedb.appspot.com",
  messagingSenderId: "26824794082",
  appId: "1:26824794082:web:52e57eaa1f524e593a63bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
