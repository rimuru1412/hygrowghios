import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyC_YZWGhEigJgjdxb3a--FKVcYY2_JJ1qQ",
    authDomain: "hygrownft.firebaseapp.com",
    databaseURL: "https://hygrownft-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hygrownft",
    storageBucket: "hygrownft.appspot.com",
    messagingSenderId: "666341807162",
    appId: "1:666341807162:ios:cac8c1d8b33ee4ff7a5103",
};
// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.database();

export { db };