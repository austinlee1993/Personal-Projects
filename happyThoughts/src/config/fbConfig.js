import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "happythoughts-17fd8.firebaseapp.com",
    databaseURL: "https://happythoughts-17fd8.firebaseio.com",
    projectId: "happythoughts-17fd8",
    storageBucket: "happythoughts-17fd8.appspot.com",
    messagingSenderId: "1083822418689",
    appId: "1:1083822418689:web:248ad350c3502f2f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
