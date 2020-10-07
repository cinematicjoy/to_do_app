  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAN1v1x6N9ptNbJAnUI_upS-90z-2ATo58",
    authDomain: "to-do-app-byj.firebaseapp.com",
    databaseURL: "https://to-do-app-byj.firebaseio.com",
    projectId: "to-do-app-byj",
    storageBucket: "to-do-app-byj.appspot.com",
    messagingSenderId: "553358292590",
    appId: "1:553358292590:web:595660a6d8cf3bb07c987f",
    measurementId: "G-M1LS4QQ83X"
  });

  const db = firebaseApp.firestore();

  export default db;