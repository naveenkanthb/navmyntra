import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config =  {
    apiKey: "AIzaSyCaQ2DV0iCPNypH2zQI3aYW75Wsu_Ijf0E",
    authDomain: "navmyntra.firebaseapp.com",
    databaseURL: "https://navmyntra.firebaseio.com",
    projectId: "navmyntra",
    storageBucket: "navmyntra.appspot.com",
    messagingSenderId: "977603083065",
    appId: "1:977603083065:web:c49759941240b69abcc6e8",
    measurementId: "G-S4VVXME578"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
