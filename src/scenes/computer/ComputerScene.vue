<script setup lang="ts">
import { useDisplayMode } from "@/utils/display";
import ComputerSceneDesktop from "./ComputerSceneDesktop.vue";
import ComputerSceneMobile from "./ComputerSceneMobile.vue";

const displayMode = useDisplayMode();
</script>

<template>
  <ComputerSceneDesktop v-if="displayMode.orientation === 'landscape'" />
  <ComputerSceneMobile v-else-if="displayMode.orientation === 'portrait'" />
  <div v-else>Unsupported display orientation: {{ displayMode.orientation }}</div>
</template>
