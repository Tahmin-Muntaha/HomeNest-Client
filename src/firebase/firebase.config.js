
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVip7GUPqVy1-yuc0v79f7dMqt5qrjij4",
  authDomain: "homenest-af02e.firebaseapp.com",
  projectId: "homenest-af02e",
  storageBucket: "homenest-af02e.firebasestorage.app",
  messagingSenderId: "766376878884",
  appId: "1:766376878884:web:47ef5880c7a27c3bc889b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);