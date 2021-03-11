import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBCxq2c4ufF-Sh-ZrSzb-kapukqy2-x_Hk",
    authDomain: "memento-2d613.firebaseapp.com",
    projectId: "memento-2d613",
    storageBucket: "memento-2d613.appspot.com",
    messagingSenderId: "617057479165",
    appId: "1:617057479165:web:86d592c703b8ce597b1194",
    measurementId: "G-27GXMTHMW5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firestore = firebase.firestore();

export default firestore;