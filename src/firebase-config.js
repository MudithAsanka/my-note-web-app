import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5XXWOMzdjzcgeBzHxvv66-E7PiMpu3RA",
    authDomain: "my-notes-app-c1ea5.firebaseapp.com",
    projectId: "my-notes-app-c1ea5",
    storageBucket: "my-notes-app-c1ea5.appspot.com",
    messagingSenderId: "904339273975",
    appId: "1:904339273975:web:cb61f37090a62ac13c7bf2",
    measurementId: "G-2K7C4BFRKT"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)