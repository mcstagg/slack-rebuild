import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCBwMN_ZqQRY7YkBMNKN7vNkIYpvHHDFGg",
    authDomain: "slack-rebuilt.firebaseapp.com",
    projectId: "slack-rebuilt",
    storageBucket: "slack-rebuilt.appspot.com",
    messagingSenderId: "748584565069",
    appId: "1:748584565069:web:fa2db4344d59d68119df04"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };