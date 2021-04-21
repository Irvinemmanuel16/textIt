import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDct4gcbOb1s-iSUKIyhGx-xY0Ky5Tw7jc',
  authDomain: 'text-it-portfolio-app.firebaseapp.com',
  projectId: 'text-it-portfolio-app',
  storageBucket: 'text-it-portfolio-app.appspot.com',
  messagingSenderId: '91243223456',
  appId: '1:91243223456:web:07737f8010b986fb646cc5',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const firestore = firebase.firestore;
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, firestore };
