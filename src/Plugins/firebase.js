import * as firebase from 'firebase'

// eslint-disable-next-line
let database = undefined;

export const init = () => {

    console.log(process.env.REACT_APP_FIREBASE_KEY);

    let config = {
        apiKey: process.env.REACT_APP_FIREBASE_KEY,
        authDomain: "meorganiza-3c97c.firebaseapp.com",
        databaseURL: "https://meorganiza-3c97c.firebaseio.com",
        projectId: "meorganiza-3c97c",
        storageBucket: "meorganiza-3c97c.appspot.com",
        messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
    }

    firebase.initializeApp(config)
    database = firebase.database()
}