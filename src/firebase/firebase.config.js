// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2vgjnluR7Zq90Mdfqy3AVAnlLPZIZQeg",
  authDomain: "mi-college-8bb1c.firebaseapp.com",
  projectId: "mi-college-8bb1c",
  storageBucket: "mi-college-8bb1c.appspot.com",
  messagingSenderId: "554547510361",
  appId: "1:554547510361:web:daf4dc44f01add6ba38548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app