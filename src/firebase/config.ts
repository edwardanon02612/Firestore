import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9SCbOSWdR4ENgLgCieYiXmN1pblg2Bdc",
    authDomain: "edward-sql-demos.firebaseapp.com",
    projectId: "edward-sql-demos",
    storageBucket: "edward-sql-demos.appspot.com",
    messagingSenderId: "266571788155",
    appId: "1:266571788155:web:c13571fc77c3d0869117de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  export default firebase.firestore();