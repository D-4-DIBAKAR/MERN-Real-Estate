// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-5f491.firebaseapp.com",
  projectId: "real-estate-5f491",
  storageBucket: "real-estate-5f491.appspot.com",
  messagingSenderId: "507527921755",
  appId: "1:507527921755:web:46220f49ad8795f2a73f7e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
