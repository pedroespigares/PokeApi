 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAnTGNxXV8uO7_A8pAKjzYC_4XJM10sMs8",
    authDomain: "pokeapigame-pedro.firebaseapp.com",
    projectId: "pokeapigame-pedro",
    storageBucket: "pokeapigame-pedro.appspot.com",
    messagingSenderId: "735241996299",
    appId: "1:735241996299:web:584af4e1d2c09cff76df0e"
  };
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);