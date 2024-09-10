// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEPPV2UT_nFgNC4g2mGAjJvIZjoEzoGaU",
  authDomain: "admin-panl.firebaseapp.com",
  projectId: "admin-panl",
  storageBucket: "admin-panl.appspot.com",
  messagingSenderId: "1029573263896",
  appId: "1:1029573263896:web:76aee12d2c3e7a44caf96d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)