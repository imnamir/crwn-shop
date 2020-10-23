import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRuKLqMwtDE1aecwH40222unXI6P0U2ck",
    authDomain: "crwn-db-c7352.firebaseapp.com",
    databaseURL: "https://crwn-db-c7352.firebaseio.com",
    projectId: "crwn-db-c7352",
    storageBucket: "crwn-db-c7352.appspot.com",
    messagingSenderId: "1088296837780",
    appId: "1:1088296837780:web:ce9c4f19115636a6e2ca81"
};


export const CreateUserProfile = async (user, additionalData) => {
    if(!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();
        userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGooogle = () => auth.signInWithPopup(provider);

export default firebase;