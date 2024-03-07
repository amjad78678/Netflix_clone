import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPyP7NZO66i3cXAvfXDFMtjOgBtCgxpaM",
  authDomain: "netflix-gpt-63d77.firebaseapp.com",
  projectId: "netflix-gpt-63d77",
  storageBucket: "netflix-gpt-63d77.appspot.com",
  messagingSenderId: "353388487636",
  appId: "1:353388487636:web:c85e2079d642a35b852c41",
  measurementId: "G-VGK6ZHL84N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();