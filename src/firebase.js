 import firebase from 'firebase/app'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBo92mn65GG5y8-FqwVAFyZUarbL14d7m4",
    authDomain: "mimenuqr-2ec70.firebaseapp.com",
    databaseURL: "https://mimenuqr-2ec70.firebaseio.com",
    projectId: "mimenuqr-2ec70",
    storageBucket: "mimenuqr-2ec70.appspot.com",
    messagingSenderId: "263442829058",
    appId: "1:263442829058:web:bf9853a6a1542349e2bc1b",
    measurementId: "G-88BLVJQRML"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  // Inicializa la base de datos de firebase
  export const db = fb.firestore();
  