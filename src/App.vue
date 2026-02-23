<script setup lang="ts">
import { useCounterStore } from "./stores/counter";

const counterStore = useCounterStore();

const increment = () => {
  counterStore.increment();
};
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>Counter: {{ counterStore.count }} <button @click="increment">Increment</button></p>
</template>

<style scoped></style>
