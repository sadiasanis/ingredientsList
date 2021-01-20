import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyA6chQhTUfsT-o46eGz4QlevqCF9t0ossA",
    authDomain: "addingredients-837ac.firebaseapp.com",
    databaseURL: "https://addingredients-837ac-default-rtdb.firebaseio.com",
    projectId: "addingredients-837ac",
    storageBucket: "addingredients-837ac.appspot.com",
    messagingSenderId: "708984064657",
    appId: "1:708984064657:web:e9f568e6c850b9b7f5cd30"}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const projectStorage =firebase.storage();
//   const database =firebase.firestore();
//   const timestamp =firebase.firestore.FieldValue.serverTimestamp;

  //export {projectStorage, projectFirestore, timestamp};