import Vue from 'vue'
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA5_tgkn0XlgAYTj8E94cLs7HUpwATWjx0",
  authDomain: "fcrudex.firebaseapp.com",
  databaseURL: "https://fcrudex.firebaseio.com",
  projectId: "fcrudex",
  storageBucket: "fcrudex.appspot.com",
  messagingSenderId: "948224711618"
};
firebase.initializeApp(config);

export default firebase
