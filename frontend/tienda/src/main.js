import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG-mRfQepuMEpVkoUUK4mVfLKBnfnvlO4",
  authDomain: "programacionweb-d7d92.firebaseapp.com",
  projectId: "programacionweb-d7d92",
  storageBucket: "programacionweb-d7d92.appspot.com",
  messagingSenderId: "506625350811",
  appId: "1:506625350811:web:39df73c37ef8ec42cd3a3e"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
