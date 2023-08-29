import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaYkyigImnlCWNdF0DNJASsNLnzJQHN_A",
  authDomain: "social-network-df6bc.firebaseapp.com",
  databaseURL:
    "https://social-network-df6bc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "social-network-df6bc",
  storageBucket: "social-network-df6bc.appspot.com",
  messagingSenderId: "580580401625",
  appId: "1:580580401625:web:495b6b74d8c50cffbeb9c8",
  measurementId: "G-SEZ4NNGQXX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
