import Vue from 'vue'
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCBfGNOH7J3E9HkTAtkVGYBsNyFZ1EoZIM",
  authDomain: "fir-crud-example-array.firebaseapp.com",
  databaseURL: "https://fir-crud-example-array.firebaseio.com",
  projectId: "fir-crud-example-array",
  storageBucket: "fir-crud-example-array.appspot.com",
  messagingSenderId: "986612948684"
};
firebase.initializeApp(config);

export default firebase
