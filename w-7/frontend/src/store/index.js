import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    walkpaths: [],
    visitors: [],
    populate: []
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount;
    },
    SET_WALKPATHS(state, data) {
      state.walkpaths = data;
    },
    SET_VISITORS(state, data) {
      state.visitors = data;
    },
    SET_POPULATE(state, data) {
      state.populate = data;
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
    },
    async fetchVisitors({ commit }) {
      const result = await axios.get("http://localhost:3000/visitors/all/json");
      commit("SET_VISITORS", result.data);
    },
    async populateDatabase({ commit }) {
      const fillIn = await axios.get("http://localhost:8080/setup-database");
      commit("SET_POPULATE", fillIn.data);
    }
  },
  modules: {}
});
