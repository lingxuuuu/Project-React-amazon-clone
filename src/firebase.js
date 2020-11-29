// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCb2rm0GjOObEvYEWz3oqV8WVSfhl7Jsgc",
    authDomain: "clone-48dbe.firebaseapp.com",
    databaseURL: "https://clone-48dbe.firebaseio.com",
    projectId: "clone-48dbe",
    storageBucket: "clone-48dbe.appspot.com",
    messagingSenderId: "311527690051",
    appId: "1:311527690051:web:ba3e3f49d7352bfdd969f6",
    measurementId: "G-NFLKGXJ0P0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore(); //firestore is the realtime db of firebase
  const auth = firebaseApp.auth(); //variable to handle all the signin


  export { db, auth };