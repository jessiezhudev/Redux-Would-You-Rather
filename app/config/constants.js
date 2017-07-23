
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyARg2CSC5562ZjNOsD32ISu5hct9L_40mI",
  authDomain: "would-you-rather-9a84a.firebaseapp.com",
  databaseURL: "https://would-you-rather-9a84a.firebaseio.com"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
