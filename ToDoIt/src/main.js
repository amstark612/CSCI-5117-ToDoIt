import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import { firestorePlugin } from "vuefire";
import { auth } from "@/firebaseConfig";

import "./assets/styles/global.sass";

Vue.use(firestorePlugin);

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
