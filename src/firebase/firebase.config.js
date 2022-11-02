// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apikey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCo_-fZBZ5NZ-DjlE3d_-FneykN4ZmbGVE",
  authDomain: "car-mecanic-986a1.firebaseapp.com",
  projectId: "car-mecanic-986a1",
  storageBucket: "car-mecanic-986a1.appspot.com",
  messagingSenderId: "108454598953",
  appId: "1:108454598953:web:ab4e2944a7cbcfa3c6ff38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;