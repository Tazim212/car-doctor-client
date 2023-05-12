// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC82X5etBjKvRfwzwxR6-YqBDJBLIVs5Vg",
  authDomain: "car-doctor-app-f326f.firebaseapp.com",
  projectId: "car-doctor-app-f326f",
  storageBucket: "car-doctor-app-f326f.appspot.com",
  messagingSenderId: "871122329347",
  appId: "1:871122329347:web:217c08d654a13decfed336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;