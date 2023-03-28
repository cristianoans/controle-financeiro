
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAmH-oryduOjWgbh48PnJGEOSt_ANZZwoE",
  authDomain: "controle-financeiro-afd9f.firebaseapp.com",
  projectId: "controle-financeiro-afd9f",
  storageBucket: "controle-financeiro-afd9f.appspot.com",
  messagingSenderId: "992314387957",
  appId: "1:992314387957:web:e5a6eb6da4dfe0792c44bc"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);