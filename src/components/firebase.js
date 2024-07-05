// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYry_TNMdOXJorSZFcLKZcuFB1emk1Ado",
  authDomain: "jointgoals-advisor.firebaseapp.com",
  projectId: "jointgoals-advisor",
  storageBucket: "jointgoals-advisor.appspot.com",
  messagingSenderId: "66543235696",
  appId: "1:66543235696:web:aa4bbf7cbf3ff97282bab5",
  measurementId: "G-HFTCBL95W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);