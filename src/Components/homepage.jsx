// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIdNDPTQ02hxld6Le3jbegMgmopDCshC0",
  authDomain: "fdaportalqm.firebaseapp.com",
  projectId: "fdaportalqm",
  storageBucket: "fdaportalqm.appspot.com",
  messagingSenderId: "359076914597",
  appId: "1:359076914597:web:cb88fc22b53c6282d8344c",
  measurementId: "G-TERD0YTC00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);