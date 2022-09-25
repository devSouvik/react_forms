// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzLYCmtH4tRnSNNi0g4Sr4iQimppkiPOw",
  authDomain: "testproject-5d0d4.firebaseapp.com",
  projectId: "testproject-5d0d4",
  storageBucket: "testproject-5d0d4.appspot.com",
  messagingSenderId: "816705335802",
  appId: "1:816705335802:web:80b8658507b42e247b7443",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
