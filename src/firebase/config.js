import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANw5lNlv-EKvdt4w9pHAXPZpc_gJHEH70",
  authDomain: "hero-69f7c.firebaseapp.com",
  databaseURL: "https://hero-69f7c.firebaseio.com",
  projectId: "hero-69f7c",
  storageBucket: "hero-69f7c.appspot.com",
  messagingSenderId: "67907848775",
  appId: "1:67907848775:web:535854dc14738bedaf3f62",
  measurementId: "G-98TQ9ZGPHS",
};



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
