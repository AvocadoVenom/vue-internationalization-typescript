import { TranslateResult } from "vue-i18n";

import { i18n } from "@/main";

export interface Link {
  caption: string | TranslateResult;
  link: string | TranslateResult;
}

export function getEcosystemPlugins() {
  return [
    {
      caption: i18n.t("ecosystem.vue-router"),
      url: "https://router.vuejs.org"
    },
    {
      caption: i18n.t("ecosystem.vuex"),
      url: "https://vuex.vuejs.org"
    },
    {
      caption: i18n.t("ecosystem.vue-devtools"),
      url: "https://github.com/vuejs/vue-devtools#vue-devtools"
    },
    {
      caption: i18n.t("ecosystem.vue-loader"),
      url: "https://vue-loader.vuejs.org"
    },
    {
      caption: i18n.t("ecosystem.awesome-vue"),
      url: "https://github.com/vuejs/awesome-vue"
    }
  ];
}
