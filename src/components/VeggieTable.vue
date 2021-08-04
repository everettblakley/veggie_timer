<template>
  <section class="overflow-x-hidden overflow-y-auto">
    <table class="mx-auto table-fixed">
      <tr>
        <th>Vegetable</th>
        <th
          v-for="option in timeOptions"
          :key="option"
          class="font-light option"
          :class="['bg-times-' + [option]]"
        >
          {{ option }}
        </th>
      </tr>
      <tr
        v-for="(veg, index) in veggies"
        :key="veg.name"
        :class="{ 'bg-yellow-100': index % 2 === 0 }"
      >
        <td class="px-3 overflow-hidden whitespace-nowrap">
          <p>{{ veg.name }}</p>
        </td>
        <td
          v-for="option in timeOptions"
          :key="option"
          class="option"
          :class="[optionClassName(option, veg)]"
          @click="handleClick(option, veg)"
        ></td>
      </tr>
    </table>
  </section>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const veggies = store.state.data;
    const timeOptions = [15, 20, 25, 30, 35, 40, 45, 60, 90];
    return {
      veggies,
      timeOptions,
      selectedVeggies: store.state.selectedVeggies,
      selectVeggie: (veggie) => store.commit("selectVeggie", veggie),
      removeVeggie: (veggie) => store.commit("removeVeggie", veggie),
    };
  },
  methods: {
    optionClassName(option, { name, times }) {
      let klass = times[option] ? `bg-times-${option} cursor-pointer` : "";
      if (this.selectedVeggies[name] === option) klass += " selected";
      return klass;
    },
    handleClick(option, { name, times }) {
      if (times[option]) {
        const selectedVeg = this.selectedVeggies[name];
        if (selectedVeg === option) {
          this.removeVeggie({ name });
          return;
        }
        this.selectVeggie({ name, time: option });
      }
    },
  },
};
</script>

<style lang="postcss">
.option {
  @apply w-12 h-3 text-center text-white;
}
td[class*="bg-times-"]:hover,
.selected {
  @apply border-4 border-gray-900;
}
</style>