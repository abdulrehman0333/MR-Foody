import * as firebase from "firebase";
import firestore from "firebase/firestore";
const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyChxUXrhh3LK85XrfZmHcg4ZqNu6f_L6dk",
    authDomain: "mrfoody-ar.firebaseapp.com",
    databaseURL: "https://mrfoody-ar.firebaseio.com",
    projectId: "mrfoody-ar",
    storageBucket: "mrfoody-ar.appspot.com",
    messagingSenderId: "829880840092",
    appId: "1:829880840092:web:7459962a36c1986a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

export default firebase;