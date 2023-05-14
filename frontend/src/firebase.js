// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs8demIG8sSY5UwElanLBIcMrVwZXfusg",
  authDomain: "react-auth-26a06.firebaseapp.com",
  projectId: "react-auth-26a06",
  storageBucket: "react-auth-26a06.appspot.com",
  messagingSenderId: "257524598496",
  appId: "1:257524598496:web:c70c975abb71d56680b285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



//to check whether the user state changes after
//import { getAuth, onAuthStateChanged } from "firebase/auth";
//
//const auth = getAuth();
//onAuthStateChanged(auth, (user) => {
//  if (user) {
//    // User is signed in, see docs for a list of available properties
//    // https://firebase.google.com/docs/reference/js/firebase.User
//    const uid = user.uid;
//    // ...
//  } else {
//    // User is signed out
//    // ...
//  }
//});