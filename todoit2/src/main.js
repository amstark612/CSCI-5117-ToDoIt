import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import "./assets/styles/global.sass";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeQ6TPDl3PmAIdsV60HKxW-WL2wR5XV2A",
  authDomain: "todoit-5127b.firebaseapp.com",
  projectId: "todoit-5127b",
  storageBucket: "todoit-5127b.appspot.com",
  messagingSenderId: "1072704552240",
  appId: "1:1072704552240:web:3ebe71ddd872ad293edcf5",
  measurementId: "G-5JPBJPWQ5V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// init components
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

Vue.config.productionTip = false;
let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: function (h) {
        return h(App);
      }
    }).$mount("#app");
  }
})
