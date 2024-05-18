// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApJgWj9D9tLXGfQbqYjYegnuPvSVFKSzM",
  authDomain: "another-simple-firebase-d12d3.firebaseapp.com",
  projectId: "another-simple-firebase-d12d3",
  storageBucket: "another-simple-firebase-d12d3.appspot.com",
  messagingSenderId: "387769576489",
  appId: "1:387769576489:web:55a0b975ffa94bf31cc038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)