import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import mitt from 'mitt';

const emitter = mitt();

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
  
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');