
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA6E4CfpuQS4OcKOegjR2SkEhljKxkh5A8",
  authDomain: "react-netflix-clone-36d77.firebaseapp.com",
  projectId: "react-netflix-clone-36d77",
  storageBucket: "react-netflix-clone-36d77.appspot.com",
  messagingSenderId: "717626684288",
  appId: "1:717626684288:web:16d33bb74a444b69974765",
  measurementId: "G-5J5HZB1WWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app) 