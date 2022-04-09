// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzxCKo1zvZt3mmnpKaM5JabW-c4O8SCVc",
  authDomain: "fir-androuter.firebaseapp.com",
  projectId: "fir-androuter",
  storageBucket: "fir-androuter.appspot.com",
  messagingSenderId: "267636885508",
  appId: "1:267636885508:web:52c57ad5cf8b5aba650d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;