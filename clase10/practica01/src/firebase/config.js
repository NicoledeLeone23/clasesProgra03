import app from "firebase/app"
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyABdYcRDg9_9Zy2wgLnVwn6RokLXtDzlTg",
    authDomain: "demo01-d0c8f.firebaseapp.com",
    projectId: "demo01-d0c8f",
    storageBucket: "demo01-d0c8f.firebasestorage.app",
    messagingSenderId: "446048759893",
    appId: "1:446048759893:web:8bf1d695ce8033461124dc"
  };

  app.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const storage = app.storage()
  export const db = app.firestore()  // app.firestore()  es un metodo

  
