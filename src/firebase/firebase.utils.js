import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyClivW3gyAGysE3YVIBKbUsiTi-kwNfpR0",
  authDomain: "crwn-db-a579c.firebaseapp.com",
  projectId: "crwn-db-a579c",
  storageBucket: "crwn-db-a579c.appspot.com",
  messagingSenderId: "317774009482",
  appId: "1:317774009482:web:21ec61086c60c2766b0973",
  measurementId: "G-2859F098JL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;