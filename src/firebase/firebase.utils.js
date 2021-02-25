import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCQr0LQoGSIzoBz5A80sGfAvFwDqklVi7M",
    authDomain: "crwn-db-5eb82.firebaseapp.com",
    projectId: "crwn-db-5eb82",
    storageBucket: "crwn-db-5eb82.appspot.com",
    messagingSenderId: "500180861371",
    appId: "1:500180861371:web:2fabcf207f48db5e7d449e",
    measurementId: "G-5N7GFZNZCZ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;