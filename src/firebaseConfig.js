import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const isProduction = process.env.REACT_APP_IS_PROD === "true" ? true : false;

const firebaseConfig = {
  apiKey: "AIzaSyDCPG1CSRySaoyT04HWTfOTgVTSX1KTxGI",
  authDomain: "pensook-chatbot.firebaseapp.com",
  projectId: "pensook-chatbot",
  storageBucket: "pensook-chatbot.appspot.com",
  messagingSenderId: "921392032103",
  appId: "1:921392032103:web:4cccee08de408c52c567c2",
  measurementId: "G-J0YJ07YY5V",
};

const firebaseConfigProduction = {
  apiKey: "AIzaSyDr1huD0xfzbwbEDSkQ-v2LyH480NAHWGw",
  authDomain: "pensook-2b981.firebaseapp.com",
  projectId: "pensook-2b981",
  storageBucket: "pensook-2b981.appspot.com",
  messagingSenderId: "773304824265",
  appId: "1:773304824265:web:4f0ce686d7e4987ff3b818",
  measurementId: "G-3JJWZQZF6W",
};

firebase.initializeApp(
  isProduction ? firebaseConfigProduction : firebaseConfig
);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
