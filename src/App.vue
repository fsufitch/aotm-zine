<script setup lang="ts">
import { RouterView } from "vue-router";
import { useCounterStore } from "./stores/counter";

const counterStore = useCounterStore();

const increment = () => {
  counterStore.increment();
};
</script>

<template>
  <div class="appContainer">
    <RouterView />
  </div>
</template>

<style scoped>
.appContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>
