import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyAaAQu_hHfwSUTbccDpvREqsJpQzrPfUh0",
    authDomain: "trading-assets-limited.firebaseapp.com",
    databaseURL: "https://trading-assets-limited-default-rtdb.firebaseio.com",
    projectId: "trading-assets-limited",
    storageBucket: "trading-assets-limited.appspot.com",
    messagingSenderId: "459249329181",
    appId: "1:459249329181:web:c1e1d082c2d1bf20bb92f4"
};

// init firebase
initializeApp(firebaseConfig)

// init firebase Auth
const auth = getAuth()

const database = getDatabase();

const db = getFirestore();

export { auth, db, database }
