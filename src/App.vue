<template>
  <header>
    <h1 class="py-4 text-3xl text-center">Veggie Timer</h1>
  </header>
  <main class="container mx-auto overflow-x-hidden overflow-y-auto">
    <div class="grid grid-cols-1 px-4 py-2 md:grid-cols-2 md:px-2 lg:px-0">
      <veggie-table class="flex-1" />
      <timer class="flex-1" />
    </div>
  </main>
  <footer class="py-4 text-center text-black bg-yellow-100">
    <a
      href="https://everettblakley.ca"
      target="_blank"
      title="Everett Blakley's Portfolio"
      rel="noreferrer"
      class="italic text-yellow-900 text-small hover:underline"
    >
      &copy; Everett Blakley {{ currentYear }}
    </a>
  </footer>
</template>

<script>
import VeggieTable from "./components/VeggieTable.vue";
import Timer from "./components/Timer.vue";

export default {
  setup() {
    const now = new Date();
    return {
      currentYear: now.getFullYear(),
    };
  },
  components: { VeggieTable, Timer },
};
</script>

