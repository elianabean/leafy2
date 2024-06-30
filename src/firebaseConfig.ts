import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyvtPw2B-TI4nVu0WAhxO-6vJEXhk67I0",
  authDomain: "leafy-f01bf.firebaseapp.com",
  databaseURL: "https://leafy-f01bf-default-rtdb.firebaseio.com",
  projectId: "leafy-f01bf",
  storageBucket: "leafy-f01bf.appspot.com",
  messagingSenderId: "1063942550357",
  appId: "1:1063942550357:web:4d8131b2cec88a953375dc",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
