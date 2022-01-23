// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoyPuEWJeZWseO5OF2a9kLuC3wv24LKFY",
  authDomain: "disney-plus-clone-410b4.firebaseapp.com",
  projectId: "disney-plus-clone-410b4",
  storageBucket: "disney-plus-clone-410b4.appspot.com",
  messagingSenderId: "221238670873",
  appId: "1:221238670873:web:a307fef85a0de12f6d5c88",
  measurementId: "G-BBVH6WJJRD"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore()

export { db }