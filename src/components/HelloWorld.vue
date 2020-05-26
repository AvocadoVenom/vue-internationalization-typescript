<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-html="headline"></p>
    <h3>{{ $t("titles.plugins") }}</h3>
    <ul>
      <li v-for="(l, i) in cliPlugins" :key="i">
        <a :href="l.url" target="_blank" rel="noopener">{{ l.caption }}</a>
      </li>
    </ul>
    <h3>{{ $t("titles.links") }}</h3>
    <ul>
      <li v-for="(l, i) in essentialLinks" :key="i">
        <a :href="l.url" target="_blank" rel="noopener">{{ l.caption }}</a>
      </li>
    </ul>
    <h3>{{ $t("titles.ecosystem") }}</h3>
    <ul>
      <li v-for="(l, i) in ECOSYSTEM_PLUGINS" :key="i">
        <a :href="l.url" target="_blank" rel="noopener">{{ l.caption }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TranslateResult } from "vue-i18n";

import { Link, getEcosystemPlugins } from "@/models/model";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      headline: this.$t("headline") as TranslateResult,
      cliPlugins: [
        {
          url:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
          caption: "babel"
        },
        {
          url:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",
          caption: "typescript"
        },
        {
          url:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
          caption: "eslint"
        }
      ],
      essentialLinks: (this.$t("essentialLinks") as unknown) as Link[],
      ECOSYSTEM_PLUGINS: getEcosystemPlugins()
    };
  },
  watch: {
    "$store.state.language": function(/* newLang: Locale */) {
      this.headline = this.$t("headline");
      // this.headline = this.$tc("headline", 0, newLang); // If you want to use the newly selected language
      this.essentialLinks = (this.$t("essentialLinks") as unknown) as Link[];
      this.ECOSYSTEM_PLUGINS = getEcosystemPlugins();
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
