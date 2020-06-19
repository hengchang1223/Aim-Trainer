import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDay9ZvfdxLVN3c95a4ADNqxRzXuMomDbE",
    authDomain: "aim-trainer-rank.firebaseapp.com",
    databaseURL: "https://aim-trainer-rank.firebaseio.com",
    projectId: "aim-trainer-rank",
    storageBucket: "aim-trainer-rank.appspot.com",
    messagingSenderId: "178091939742",
    appId: "1:178091939742:web:af2ea59e5bfa996c75a88f",
    measurementId: "G-YS4STBPEG1"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;