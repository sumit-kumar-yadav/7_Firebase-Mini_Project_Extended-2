import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";  // Searched "add firebase to js project"
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiX6-uNpWgmVwHgGAh9eHDGDjn3BEzuQg",
  authDomain: "cart-84a19.firebaseapp.com",
  projectId: "cart-84a19",
  storageBucket: "cart-84a19.appspot.com",
  messagingSenderId: "905430125379",
  appId: "1:905430125379:web:4a0483220abe3bc604fdf6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

