import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";  // Searched "add firebase to js project"
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAajWQq7oefkCw39e-7zHgWveBU-WgGwqk",
  authDomain: "cart2-941e5.firebaseapp.com",
  projectId: "cart2-941e5",
  storageBucket: "cart2-941e5.appspot.com",
  messagingSenderId: "8097538113",
  appId: "1:8097538113:web:c66db24b0aaa53969ca6c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

