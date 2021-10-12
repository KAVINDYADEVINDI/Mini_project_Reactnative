import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC5bXztk_OZgn57p6VhxKaew8HFnmbVw8s",
  authDomain: "blogpostapp-f5584.firebaseapp.com",
  projectId: "blogpostapp-f5584",
  storageBucket: "blogpostapp-f5584.appspot.com",
  messagingSenderId: "974254595321",
  appId: "1:974254595321:web:e5ebd426002329e6729628",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
