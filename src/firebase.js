import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBE6l3jiVmeSJE0Q54tcGoXPn6Kh-HAzPc",
  authDomain: "foosball-scoreboard.firebaseapp.com",
  projectId: "foosball-scoreboard",
  storageBucket: "foosball-scoreboard.appspot.com",
  messagingSenderId: "619978414737",
  appId: "1:619978414737:web:5130b1a1e8437841d7fd30",
  measurementId: "G-E25BM1KZ6H"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();