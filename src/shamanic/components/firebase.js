import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBxfGjvlt4mEyF9fhPaQUfCcTzd0CMRpck",
    authDomain: "neowork-8a6c4.firebaseapp.com",
    databaseURL: "https://neowork-8a6c4.firebaseio.com",
    projectId: "neowork-8a6c4",
    storageBucket: "neowork-8a6c4.appspot.com",
    messagingSenderId: "759529632154",
    appId: "1:759529632154:web:0db582d7aa0630236cca23",
    measurementId: "G-GNXZKCRZ62"
  }

firebase.initializeApp(firebaseConfig)

export { firebase }
