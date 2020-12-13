import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC930GgAGZ9KDhh0BdUJIPerOJkjzEG55s",
  authDomain: "crown-clothing-90983.firebaseapp.com",
  projectId: "crown-clothing-90983",
  storageBucket: "crown-clothing-90983.appspot.com",
  messagingSenderId: "821705780681",
  appId: "1:821705780681:web:3e3ef3a64a187991bb4c18",
  measurementId: "G-JSDFKD7SNH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;