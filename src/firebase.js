import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDpjqmgLhiC9i8V-SaTT3YVnXj5MSRkaeU",
    authDomain: "tinder-react-clone-c0c86.firebaseapp.com",
    projectId: "tinder-react-clone-c0c86",
    storageBucket: "tinder-react-clone-c0c86.appspot.com",
    messagingSenderId: "826991808976",
    appId: "1:826991808976:web:99b6b712f7687ffbf069d5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;