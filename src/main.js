import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "./scss/index.scss";

import Vue from "vue";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import App from "./App.vue";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
