import Vue from "vue";
import App from "./App.vue";
import "./plugins/element";
import "./plugins/avue.js";
import router from "./router";
import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

Vue.prototype.$httpajax = http
Vue.prototype.$http = http

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
