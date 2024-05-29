// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEBeJlul9OUH3uvHb-K9t8s-QDzzWBX-U",
    authDomain: "netflixgpt-e2710.firebaseapp.com",
    projectId: "netflixgpt-e2710",
    storageBucket: "netflixgpt-e2710.appspot.com",
    messagingSenderId: "923398292853",
    appId: "1:923398292853:web:6bdfe465e753718e547f3c",
    measurementId: "G-G8RR9MC2LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const AUTH = getAuth();