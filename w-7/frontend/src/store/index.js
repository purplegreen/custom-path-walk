import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    walkpath: []
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount;
    },
    SET_WALKPATHS(state, data) {
      state.walkpaths = data;
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1;
      commit("SET_COUNTER", newCount);
    },
    async fetchWalkpaths({ commit }) {
      const result = await axios.get("http://localhost:3000/walkpath/all/json");
      commit("SET_WALKPATHS", result.data);
    }
  },
  modules: {}
});
