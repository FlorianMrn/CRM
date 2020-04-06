import firebase from 'firebase/app';
import 'firebase/firestore';

const config  = {
    apiKey: "AIzaSyACxS6IsO9y1KAIdcJD0C40gWba-nGLQsk",
    authDomain: "crm-linkedin-5b2fd.firebaseapp.com",
    databaseURL: "https://crm-linkedin-5b2fd.firebaseio.com",
    projectId: "crm-linkedin-5b2fd",
    storageBucket: "crm-linkedin-5b2fd.appspot.com",
    messagingSenderId: "456851432817",
    appId: "1:456851432817:web:d23100792b59a687ca82d0"
}

firebase.initializeApp(config);

export default firebase;