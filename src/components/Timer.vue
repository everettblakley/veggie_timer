<template>
  <section class="flex flex-col items-center justify-center flex-1">
    <h1 class="text-xl">Timer</h1>
    <template v-if="activeVeggies.length">
      <p>Selected Veggies</p>
      <ul>
        <li v-for="veg in sortedVeggies" :key="veg[0]">
          {{ veg[0] }} ({{ veg[1] }} minutes)
        </li>
      </ul>
    </template>
    <template v-else>
      <p>Please select some veggies from the table to begin!</p>
    </template>
  </section>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const selectedVeggies = store.state.selectedVeggies;
    return {
      selectedVeggies,
    };
  },
  computed: {
    activeVeggies() {
      return Object.entries(this.selectedVeggies).filter((o) => !!o[1]);
    },
    sortedVeggies() {
      const _veggies = [...this.activeVeggies];
      return _veggies.sort((a, b) => {
        return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0;
      });
    },
  },
};
</script>