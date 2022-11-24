// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcjjfbU5bOYOowxfsleegnTB-dVjD-gIs",
  authDomain: "computer-house-589de.firebaseapp.com",
  projectId: "computer-house-589de",
  storageBucket: "computer-house-589de.appspot.com",
  messagingSenderId: "153904149149",
  appId: "1:153904149149:web:8b9c7de6e3fa6ed42f5a74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;