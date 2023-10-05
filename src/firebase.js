"use client"
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import 'firebase/auth';
import { getFirestore } from '@firebase/firestore'
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
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


// try to add analytics
const analytics =
  app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;

export { analytics, app }