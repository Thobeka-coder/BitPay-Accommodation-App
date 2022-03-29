import * as firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCddDRpjj4EX317TBukT77jmM28Zh3xg60",
  authDomain: "bitpay-accommodation.firebaseapp.com",
  projectId: "bitpay-accommodation",
  storageBucket: "bitpay-accommodation.appspot.com",
  messagingSenderId: "339451240093",
  appId: "1:339451240093:web:d7aa50a60047e22c493e74",
  measurementId: "G-S5M8RQ29WH"
};


let app;
if (firebase.apps.length === 0 ) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };