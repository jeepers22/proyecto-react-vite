// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL1EuNUhGtuTk9CYJC-ZYUpTc1RQjbZVg",
    authDomain: "proyecto-react-e75cf.firebaseapp.com",
    projectId: "proyecto-react-e75cf",
    storageBucket: "proyecto-react-e75cf.appspot.com",
    messagingSenderId: "130925470865",
    appId: "1:130925470865:web:82933498e0ab0a38c9cb30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);