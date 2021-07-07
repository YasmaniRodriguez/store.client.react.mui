import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyA-6lxNMc6mYaboxSevhBby2ce2rnlc-a4",
	authDomain: "order-taker-653c1.firebaseapp.com",
	projectId: "order-taker-653c1",
	storageBucket: "order-taker-653c1.appspot.com",
	messagingSenderId: "60221784284",
	appId: "1:60221784284:web:a281097a7953626c357419",
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
