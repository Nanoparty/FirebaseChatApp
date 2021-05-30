import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCbbi5P7tMPEietH4mnqAFBhJcpNXLztI8",
    authDomain: "fir-chat-d4253.firebaseapp.com",
    projectId: "fir-chat-d4253",
    storageBucket: "fir-chat-d4253.appspot.com",
    messagingSenderId: "947900115155",
    appId: "1:947900115155:web:e38164753f17020d168c26",
    measurementId: "G-0L2MCV1F85"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const firestore=firebase.firestore();

export default firestore;