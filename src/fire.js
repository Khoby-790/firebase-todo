import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAHpR4C3HJGoTiEDI9qCv4hNX9uXLEVoss",
    authDomain: "fta-app-a99b7.firebaseapp.com",
    databaseURL: "https://fta-app-a99b7-default-rtdb.firebaseio.com",
    projectId: "fta-app-a99b7",
    storageBucket: "fta-app-a99b7.appspot.com",
    messagingSenderId: "951840935829",
    appId: "1:951840935829:web:e22e5302e07a304827309c"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;