import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDbcc6rSufNR_wliTsz1FV1d8GQDI4X2rs",
  authDomain: "wireleibrary-88542.firebaseapp.com",
  databaseURL: "https://wireleibrary-88542.firebaseio.com",
  projectId: "wireleibrary-88542",
  storageBucket: "wireleibrary-88542.appspot.com",
  messagingSenderId: "200213936396",
  appId: "1:200213936396:web:1256012121354e510a3129"
};

  firebase.initializeApp(firebaseConfig)

export default firebase.firestore()