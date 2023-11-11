// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRaXjS-dnqGJd62CkjfK8FLhW4ZYnsWVQ",
  authDomain: "miniblog-a9ca8.firebaseapp.com",
  projectId: "miniblog-a9ca8",
  storageBucket: "miniblog-a9ca8.appspot.com",
  messagingSenderId: "399786614635",
  appId: "1:399786614635:web:2e9a513eb41d3b09d7f62e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export {db};