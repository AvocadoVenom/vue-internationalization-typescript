<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="$t('titles.main')" />
    <select
      v-model="$i18n.locale"
      @change="updateLanguage($event.target.value)"
    >
      <option
        v-for="(o, i) in LOCALES"
        :key="i"
        :value="o.value"
        :selected="o.value === defaultLocale"
        >{{ o.caption }}</option
      >
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

import { LOCALES, Locales } from "@/i18n/locales";
import { defaultLocale } from "@/i18n";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({ LOCALES, defaultLocale }),
  methods: {
    updateLanguage(lang: Locales) {
      this.$store.commit("SET_LANGUAGE", lang);
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
