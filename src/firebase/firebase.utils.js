import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCi24Nhr3kQzhvRk_-z-EWIoEO40vS6zdE",
    authDomain: "crwn-db-b30e0.firebaseapp.com",
    projectId: "crwn-db-b30e0",
    storageBucket: "crwn-db-b30e0.appspot.com",
    messagingSenderId: "348443356449",
    appId: "1:348443356449:web:b415dbfc1ea530c8af2260",
    measurementId: "G-CNZ8HQSTR6"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;