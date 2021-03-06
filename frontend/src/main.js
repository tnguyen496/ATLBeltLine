import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import Axios from "axios";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.prototype.$http = Axios;

const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
