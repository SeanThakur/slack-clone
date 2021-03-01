import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCg5FEJWti04WOuzXPW5yvlLqvtMeXLmkw",
    authDomain: "slack-clone-8e3f0.firebaseapp.com",
    projectId: "slack-clone-8e3f0",
    storageBucket: "slack-clone-8e3f0.appspot.com",
    messagingSenderId: "833462897415",
    appId: "1:833462897415:web:65924f0e8d7e16eddd93a2",
    measurementId: "G-K14YGF80GK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export {auth, googleProvider}

export default db;