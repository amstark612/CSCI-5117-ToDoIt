import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import "./assets/styles/global.sass";

Vue.config.productionTip = false;
let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    new Vue({
      router,
      render: function (h) {
        return h(App);
      }
    }).$mount("#app");
  }
})
