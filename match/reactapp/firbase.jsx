// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc27ucEAsaIgvttnQqVek_GAqxLoodBnU",
  authDomain: "gr8match-325a7.firebaseapp.com",
  projectId: "gr8match-325a7",
  storageBucket: "gr8match-325a7.appspot.com",
  messagingSenderId: "90002619034",
  appId: "1:90002619034:web:540897d9135855c2763d23",
  measurementId: "G-MPEXHD3E8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);