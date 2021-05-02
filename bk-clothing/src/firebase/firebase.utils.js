import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwyjlfTngHWLhfx3UILS4_kQuP7jT8MFg",
    authDomain: "bk-clothing-db.firebaseapp.com",
    projectId: "bk-clothing-db",
    storageBucket: "bk-clothing-db.appspot.com",
    messagingSenderId: "745619161326",
    appId: "1:745619161326:web:422b6d9e0a3861ac2333ff",
    measurementId: "G-GSY0RL0D31"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;