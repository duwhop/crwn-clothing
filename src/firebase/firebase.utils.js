import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBVZPm6zB9WZ3EinwRyovK9NpS8fql_bj0",
    authDomain: "crwn-db-9972d.firebaseapp.com",
    projectId: "crwn-db-9972d",
    storageBucket: "crwn-db-9972d.appspot.com",
    messagingSenderId: "841052781083",
    appId: "1:841052781083:web:7223e6dd4cd693999b56be",
    measurementId: "G-ERZTK3PVGS"
  };

// firebase.initializeApp(config);
initializeApp(config);

// export const auth = firebase.auth();
export const auth = getAuth();
// export const firestore = firebase.firestore();
export const firestore = getFirestore();

// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup();
export const signInWithGoogle = () => signInWithPopup(auth, provider).catch((error) => console.log(error));

export default firebase;