import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBx97zMycYdWs_d7rFccx_6aJEZIp-kZF4",
  authDomain: "bnet-9fafe.firebaseapp.com",
  projectId: "bnet-9fafe",
  storageBucket: "bnet-9fafe.appspot.com",
  messagingSenderId: "833432819677",
  appId: "1:833432819677:web:82f6f7b7e3b0b109bd8834"
};

const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { auth, db, storage, timestamp }