import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5qHQKmOINXOrLw6kdibo7jEALgUIcw0E",
    authDomain: "todoapp-22471.firebaseapp.com",
    projectId: "todoapp-22471",
    storageBucket: "todoapp-22471.appspot.com",
    messagingSenderId: "298931726416",
    appId: "1:298931726416:web:ac2e758332eea4529bc955"
});

const db = firebaseApp.firestore();

export default db;


