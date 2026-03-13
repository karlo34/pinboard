
import { initializeApp } from "firebase/app";
import {
    getFirestore, doc, collection, setDoc, addDoc, updateDoc,
    deleteDoc, onSnapshot, getDoc, query, where, getDocs
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgMbsaQcTtJPVsKjiFzly3mVc11dwuBdA",
    authDomain: "planboard-1.firebaseapp.com",
    projectId: "planboard-1",
    storageBucket: "planboard-1.firebasestorage.app",
    messagingSenderId: "407699826263",
    appId: "1:407699826263:web:a9bb2086cd7302879aa512"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);