import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuV9rkw6i3EaHpgb_NytsU12AQ0tQT4bU",
  authDomain: "thesocialnetwork-70b0b.firebaseapp.com",
  databaseURL: "https://thesocialnetwork-70b0b-default-rtdb.firebaseio.com",
  projectId: "thesocialnetwork-70b0b",
  storageBucket: "thesocialnetwork-70b0b.appspot.com",
  messagingSenderId: "1040093762419",
  appId: "1:1040093762419:web:612ea6cd0d8a70beb92b06",
  measurementId: "G-NSLZVL07QZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
