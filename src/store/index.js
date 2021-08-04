import { createStore } from "vuex";
import data from "../data.json";

export const store = createStore({
  state: {
    data: data.new,
    selectedVeggies: {}
  },
  mutations: {
    selectVeggie(state, { name, time }) {
      state.selectedVeggies[name] = time;
    },
    removeVeggie(state, { name }) {
      if (!!state.selectedVeggies[name]) {
        state.selectedVeggies[name] = null;
      }
    }
  }
})