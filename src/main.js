import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCbBolI-lyDLuS9Hz5wsPGd89EwmlDzIvw",
    authDomain: "file-using-status.firebaseapp.com",
    projectId: "file-using-status",
    storageBucket: "file-using-status.appspot.com",
    messagingSenderId: "834410177546",
    appId: "1:834410177546:web:114d06890211d9e3fdebf3",
    measurementId: "G-J4B5VT3RPK"
};

firebase.initializeApp(firebaseConfig)
  
createApp(App).mount('#app')