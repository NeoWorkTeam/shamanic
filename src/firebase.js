import fire from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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

  fire.initializeApp(firebaseConfig)

const db = fire.firestore()
const auth = fire.auth()

export { db , auth , fire }
