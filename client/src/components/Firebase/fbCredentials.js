import * as firebase from "firebase";
import 'firebase/auth';
import 'firebase/app';


var FbCredentials = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_BASEURL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
  apiKey:"AIzaSyB-zPILCHVKu966c4MgM4UVRodfrhiaNgs",
  authDomain:"lilones-f9071.firebaseapp.com",
  databaseURL:"https://lilones-f9071.firebaseio.com",
  projectId:"lilones-f9071" ,
  storageBucket: "lilones-f9071.appspot.com",
  messagingSenderId:"902221607704" ,
  appId: "1:902221607704:web:d50516b57c3c168f40646d",
  measurementId: "G-5S9E1YZBBE",
});
// Initialize Firebase

firebase.analytics();
firebase.auth();

export default FbCredentials;
