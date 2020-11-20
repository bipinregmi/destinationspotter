import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBx7c6IoPeCU4qiBHs3V3csk8g3uEj1RwY",
    authDomain: "destination-spotter.firebaseapp.com",
    databaseURL: "https://destination-spotter.firebaseio.com",
    projectId: "destination-spotter",
    storageBucket: "destination-spotter.appspot.com",
    messagingSenderId: "578904471981",
    appId: "1:578904471981:web:e7d87c63c729b7161c4924",
    measurementId: "G-QLVX22G3ZG"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
