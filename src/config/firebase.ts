// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS7USN2AYZ_EwRcDBTIoT0exbA9UnYRFs",
  authDomain: "alianza-la-libertad-avanza.firebaseapp.com",
  projectId: "alianza-la-libertad-avanza",
  storageBucket: "alianza-la-libertad-avanza.firebasestorage.app",
  messagingSenderId: "120545071908",
  appId: "1:120545071908:web:556300c5991bd7e98f19b1",
  measurementId: "G-9DHT1WJSWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;