import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import person from "./_person";

const dataState = createPersistedState({
  paths: ["person"],
});

export default new Vuex.Store({
  modules: {
    person,
  },
  plugins: [dataState],
});
