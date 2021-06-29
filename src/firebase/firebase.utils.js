// Intializing the firebase config object the first import is necessary to access the rest two imports.

import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC_NpIkHd_pRBKJzZFWjc9rDNdkSuMP2-s",
    authDomain: "crwn-db-f8734.firebaseapp.com",
    projectId: "crwn-db-f8734",
    storageBucket: "crwn-db-f8734.appspot.com",
    messagingSenderId: "880551164901",
    appId: "1:880551164901:web:b3bdec05794eaea39ecd0c",
    measurementId: "G-NM5PXR2L8D"
};

firebase.initializeApp(firebaseConfig);

// To use authentication and firestore database in your application initalize below objects

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// there might be a multiple authentication exist in the firebase platform but as of now we are using google 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;