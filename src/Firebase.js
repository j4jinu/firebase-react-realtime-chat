import firebase from 'firebase'

const settings = {timestampsInSnapshots: true}

const config = {
    apiKey: "AIzaSyB4QMr24vO4ONhSUBI2EG10ZvnNL-hDDNA",
    authDomain: "react-real-time-chat-d8560.firebaseapp.com",
    databaseURL: "https://react-real-time-chat-d8560-default-rtdb.firebaseio.com",
    projectId: "react-real-time-chat-d8560",
    storageBucket: "react-real-time-chat-d8560.appspot.com",
    messagingSenderId: "62348812309",
    appId: "1:62348812309:web:37eda6f032e391f4642e1c"
}
firebase.initializeApp(config);

export default firebase;