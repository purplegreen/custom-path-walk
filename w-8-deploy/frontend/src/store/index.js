import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 17,
    walkpaths: [],
    visitors: [],
    slots: [],
    walkpath: {},
    visitor: {},
    slot: {}
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount;
    },
    SET_WALKPATHS(state, data) {
      state.walkpaths = data;
    },
    SET_WALKPATH(state, data) {
      state.walkpath = data;
    },
    SET_VISITORS(state, data) {
      state.visitors = data;
    },
    SET_VISITOR(state, data) {
      state.visitor = data;
    },
    SET_SLOTS(state, data) {
      state.slots = data;
    },
    SET_SLOT(state, data) {
      state.slot = data;
    }
  },
  actions: {
    decrementCounter({ commit, state }) {
      const newCount = state.counter - 1;
      commit("SET_COUNTER", newCount);
    },
    async fetchWalkpaths({ commit }) {
      const result = await axios.get(
        `${process.env.VUE_APP_API_URL}/walkpath/all/json`
      );
      commit("SET_WALKPATHS", result.data);
    },

    async fetchWalkpath({ commit }, id) {
      const result = await axios.get(
        `${process.env.VUE_APP_API_URL}/walkpaths/${id}/json`
      );
      commit("SET_WALKPATH", result.data);
    },

    async fetchVisitors({ commit }) {
      const result = await axios.get(
        `${process.env.VUE_APP_API_URL}/visitors/all/json`
      );
      commit("SET_VISITORS", result.data);
    },

    async fetchVisitor({ commit }, id) {
      const result = await axios.get(
        `${process.env.VUE_APP_API_URL}/visitor/${id}/json`
      );
      commit("SET_VISITOR", result.data);
    },
    async fetchSlots({ commit }) {
      const result = await axios.get(
        `${process.env.VUE_APP_API_URL}/slots/all/json`
      );
      commit("SET_SLOTS", result.data);
    },
    async fetchSlot({ commit }, id) {
      const result = await axios.get(
        `${process.env.VUE_APP_API_URL}/slot/${id}/json`
      );
      commit("SET_SLOT", result.data);
    }
  },
  modules: {}
});
