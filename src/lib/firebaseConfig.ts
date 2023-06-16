import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD3BTd1h6nIS_Hq9kUtvyNvF9grSAp6-fQ",
    authDomain: "task-app-f76a2.firebaseapp.com",
    projectId: "task-app-f76a2",
    storageBucket: "task-app-f76a2.appspot.com",
    messagingSenderId: "968071275663",
    appId: "1:968071275663:web:d3d9e7adecbd3938d43cfa",
    measurementId: "G-SNRPRQ2NBN"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the auth service
export const auth = getAuth(firebaseApp);

// Get a reference to the Firestore service
export const db = getFirestore(firebaseApp);
