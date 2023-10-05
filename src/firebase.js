"use client"
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBM7s2ds_Vu8yTkyPMb91sjFOmJ2VLr7xk",
  authDomain: "interview-ex.firebaseapp.com",
  projectId: "interview-ex",
  storageBucket: "interview-ex.appspot.com",
  messagingSenderId: "534559286770",
  appId: "1:534559286770:web:11fb319e2575e419f3f76b",
  measurementId: "G-WH4E9PC6JK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
