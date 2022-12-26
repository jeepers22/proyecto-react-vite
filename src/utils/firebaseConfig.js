// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    // Creado con maxizero@gmail.com se me excedió la cuota diaria
    apiKey: "AIzaSyCL1EuNUhGtuTk9CYJC-ZYUpTc1RQjbZVg",
    authDomain: "proyecto-react-e75cf.firebaseapp.com",
    projectId: "proyecto-react-e75cf",
    storageBucket: "proyecto-react-e75cf.appspot.com",
    messagingSenderId: "130925470865",
    appId: "1:130925470865:web:82933498e0ab0a38c9cb30"

    // Creado con maxizerodev@gmail.com
    // apiKey: "AIzaSyD85SGU5RHT6m9hcoZuzpVN7Nsnhwdjslw",
    // authDomain: "proyecto-final-react-b5e77.firebaseapp.com",
    // projectId: "proyecto-final-react-b5e77",
    // storageBucket: "proyecto-final-react-b5e77.appspot.com",
    // messagingSenderId: "374680553485",
    // appId: "1:374680553485:web:252700d13f9dd3107f2d44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);