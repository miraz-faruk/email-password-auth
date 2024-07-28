// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYNf-KYO9kGEE1yhLpq_oHSktjJDC0YUc",
    authDomain: "email-password-auth-40f12.firebaseapp.com",
    projectId: "email-password-auth-40f12",
    storageBucket: "email-password-auth-40f12.appspot.com",
    messagingSenderId: "250784737351",
    appId: "1:250784737351:web:3e4d340e70dda9b3eda962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;