// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpYfxpFT2Y-bEls7xtvsr6EkBHVidvwng",
  authDomain: "netflixgpt-a1a60.firebaseapp.com",
  projectId: "netflixgpt-a1a60",
  storageBucket: "netflixgpt-a1a60.firebasestorage.app",
  messagingSenderId: "288919728008",
  appId: "1:288919728008:web:c896f7c5745013a6e1143d",
  measurementId: "G-WX6JM920V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);