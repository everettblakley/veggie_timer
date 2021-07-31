import { createStore } from "vuex";
import data from "../data.json";

export const store = createStore({
  state: {
    data: data,
    selectedVeggies: {}
  },
  mutations: {
    selectVeggie(state, { name, time }) {
      state.selectedVeggies[name] = time;
    }
  }
})