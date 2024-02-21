import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBp7v2wGY2shxV4b7ZG1VSCGf1wY6hjus",
    authDomain: "bear-web-e8482.firebaseapp.com",
    projectId: "bear-web-e8482",
    storageBucket: "bear-web-e8482.appspot.com",
    messagingSenderId: "170874916613",
    appId: "1:170874916613:web:84f8ef82aaa0b60fd3f16c",
    measurementId: "G-FD9GJ5KVTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const collection_name = 'Blogpost';
export { db, collection_name }