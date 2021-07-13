import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCntninWS3QgBFaiY3O_Yh2hdmDipkDi2I",
    authDomain: "letmeask-web-6e4af.firebaseapp.com",
    databaseURL: "https://letmeask-web-6e4af-default-rtdb.firebaseio.com",
    projectId: "letmeask-web-6e4af",
    storageBucket: "letmeask-web-6e4af.appspot.com",
    messagingSenderId: "1079361951320",
    appId: "1:1079361951320:web:f1dca3d9b0a0e212b3dc2d"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();