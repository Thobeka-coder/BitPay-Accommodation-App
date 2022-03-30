import * as firebase from "firebase";


const firebaseConfig = {
  apiKey: "******",
  authDomain: "bitpay-accommodation.firebaseapp.com",
  projectId: "bitpay-accommodation",
  storageBucket: "bitpay-accommodation.appspot.com",
  messagingSenderId: "******",
  appId: "1:339451240093:web:d7aa50a60047e22c4***",
  measurementId: "****"
};


let app;
if (firebase.apps.length === 0 ) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
