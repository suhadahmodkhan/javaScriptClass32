// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4SUJd6cFSMmDc67-moexjaHhCSR3MkGU",
  authDomain: "donation2-16be9.firebaseapp.com",
  projectId: "donation2-16be9",
  storageBucket: "donation2-16be9.appspot.com",
  messagingSenderId: "1058764396680",
  appId: "1:1058764396680:web:de5f031e51daf9f976273d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
