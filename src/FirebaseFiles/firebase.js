// firebase.js

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZ-x7bkKIqAxvqKTFnAWgVLuCLsH8NT7w",
    authDomain: "truad-52c5d.firebaseapp.com",
    projectId: "truad-52c5d",
    storageBucket: "truad-52c5d.appspot.com",
    messagingSenderId: "832117250251",
    appId: "1:832117250251:web:51cf8015b185610cb2e34e",
    measurementId: "G-9F4STT0MLM"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
