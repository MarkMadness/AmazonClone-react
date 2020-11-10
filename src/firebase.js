import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC3SujsNELq_y7urENAkLrbOlQjBZljrso",
    authDomain: "fir-b1760.firebaseapp.com",
    databaseURL: "https://fir-b1760.firebaseio.com",
    projectId: "fir-b1760",
    storageBucket: "fir-b1760.appspot.com",
    messagingSenderId: "696919403033",
    appId: "1:696919403033:web:bb5b714ff74fdd11b01888",
    measurementId: "G-4M7716DSK5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };