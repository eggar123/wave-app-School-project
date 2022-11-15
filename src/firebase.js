// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyC-c7n6uZBrDGxi6HUgMvEQfnfVc3KVlCE",

  authDomain: "waveapp-ee07e.firebaseapp.com",

  projectId: "waveapp-ee07e",

  storageBucket: "waveapp-ee07e.appspot.com",

  messagingSenderId: "498265973887",

  appId: "1:498265973887:web:88bb055506a22a1a6dcb4a",

  measurementId: "G-XGFR26JFQ2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app