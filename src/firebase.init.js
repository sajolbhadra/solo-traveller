// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
  // measurementId:process.env.REACT_APP_measurementId
  apiKey: "AIzaSyCmrLZV7-Lzy__sfMz-v24jlmSkm9VaB18",
  authDomain: "service-provider7.firebaseapp.com",
  projectId: "service-provider7",
  storageBucket: "service-provider7.appspot.com",
  messagingSenderId: "820514763272",
  appId: "1:820514763272:web:eb8c812e6016b34de857bd",
  measurementId: "G-WW3W3S746Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;