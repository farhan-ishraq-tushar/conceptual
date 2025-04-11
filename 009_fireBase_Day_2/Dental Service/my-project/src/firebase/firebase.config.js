// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA2kbYZIDSzIEHhK9CwTvMRt8TyUCW0xM",
  authDomain: "fir-basic-setup-40cbc.firebaseapp.com",
  projectId: "fir-basic-setup-40cbc",
  storageBucket: "fir-basic-setup-40cbc.firebasestorage.app",
  messagingSenderId: "1064295436454",
  appId: "1:1064295436454:web:4629c838fbafacd6d7e467"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;