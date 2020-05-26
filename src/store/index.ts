import Vue from "vue";
import Vuex from "vuex";

import { Locales } from "@/i18n/locales";
import { defaultLocale } from "@/i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: defaultLocale
  },
  mutations: {
    SET_LANGUAGE: (state, payload: Locales) => {
      state.language = payload;
    }
  },
  actions: {},
  modules: {}
});
