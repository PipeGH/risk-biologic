// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
    apiKey: "AIzaSyCHqD1PobBRlzkpYEooNWSXgFWVOcgWNSQ",
    authDomain: "biolog-risk-de075.firebaseapp.com",
    projectId: "biolog-risk-de075",
    storageBucket: "biolog-risk-de075.appspot.com",
    messagingSenderId: "1017402896135",
    appId: "1:1017402896135:web:797cc91cfb796dd0a9dfa2"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db =  getFirestore(app);

export default db;
