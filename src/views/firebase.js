import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// realtime
import { getDatabase , ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAdBEeQjGZIJR3SN4dsgFrMx6x2KVnnSjY",
  authDomain: "pretest-e8b96.firebaseapp.com",
  projectId: "pretest-e8b96",
  storageBucket: "pretest-e8b96.appspot.com",
  messagingSenderId: "859063906306",
  appId: "1:859063906306:web:00b266f0dd0d9e7f4bf71b",
  measurementId: "G-JTV5TDZCSV"
};

// firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)

// Realtime database
export const db_rt = getDatabase(app);
export const dbref_rt = ref(getDatabase());
