import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6QPkYjiELnK9l5RR9Il6tcGm75TgWEro",
  authDomain: "amaozn-challenge.firebaseapp.com",
  databaseURL: "https://amaozn-challenge.firebaseio.com",
  projectId: "amaozn-challenge",
  storageBucket: "amaozn-challenge.appspot.com",
  messagingSenderId: "780865721779",
  appId: "1:780865721779:web:71c1fc64ce3920caeb27c6",
  measurementId: "G-7MM78RCZLV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
