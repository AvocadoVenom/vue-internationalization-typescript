import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VueI18n from "vue-i18n";

Vue.use(VueI18n);

import { messages, defaultLocale } from "@/i18n";
import store from "./store";

export const i18n = new VueI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale
});

new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
