<template>
  <main class="container mx-auto pb-12">
    <h1 class="text-3xl text-center py-4">Veggie Timer</h1>
    <table class="mx-auto">
      <tr>
        <th>Vegetable</th>
        <th
          v-for="option in timeOptions"
          :key="option"
          class="option font-light"
          :class="['bg-times-' + [option]]"
        >
          {{ option }}
        </th>
      </tr>
      <tr v-for="veg in veggies" :key="veg.name">
        <td class="px-3">
          <p>{{ veg.name }}</p>
        </td>
        <td
          v-for="option in timeOptions"
          :key="option"
          class="option"
          :class="optionClassName(option, veg.times)"
        ></td>
      </tr>
    </table>
  </main>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    console.log([...store.state.data]);
    return {
      veggies: store.state.data,
      timeOptions: [15, 20, 25, 30, 35, 40, 45, 60, 90],
      selectVeggie: (veggie) => store.commit("selectVeggie", veggie),
    };
  },
  methods: {
    optionClassName(option, times) {
      return times.indexOf(option) !== -1 ? `bg-times-${option}` : "";
    },
  },
};
</script>

<style lang="postcss">
.option {
  @apply w-12 h-3 text-center text-white;
}
</style>

