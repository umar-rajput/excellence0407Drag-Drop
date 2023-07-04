import Vue from "vue";
import Vue2OrgTree from "vue2-org-tree";
import App from "./App.vue";

Vue.use(Vue2OrgTree);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
