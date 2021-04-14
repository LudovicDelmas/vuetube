require('./mystyles.scss');
import Vue from 'vue'
import App from './App.vue'
import router from './router/routeur'
import store from './store/store'
import firebase from 'firebase'
// import VueFire from 'vuefire'
import 'firebase/firestore'

// Vue.use(VueFire)

var firebaseConfig = {
  apiKey: "AIzaSyC6oF8dYZEqa6vy2m5rstUztBkO7_Itdgw",
  authDomain: "vuetube-f8fc6.firebaseapp.com",
  projectId: "vuetube-f8fc6",
  storageBucket: "vuetube-f8fc6.appspot.com",
  messagingSenderId: "541545077955",
  appId: "1:541545077955:web:eafdeb4d8e079b743b9676",
  measurementId: "G-FMZHM4VE21"
};

firebase.initializeApp(firebaseConfig);
export var database = firebase.database();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})