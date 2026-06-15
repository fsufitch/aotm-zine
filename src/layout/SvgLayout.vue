<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  scrollable?: boolean;
  background: string;
  layoutWidth: number | string;
  layoutHeight: number | string;
}>();

const viewBox = computed(() => `0 0 ${props.layoutWidth} ${props.layoutHeight}`);

// In scrollable mode keep the SVG at its natural pixel size so the container
// can scroll. Otherwise let width:100% + viewBox scale it to fit.
const svgAttrs = computed(() =>
  props.scrollable ? { width: props.layoutWidth, height: props.layoutHeight } : { width: "100%" },
);
</script>

<template>
  <div class="svg-container">
    <svg v-bind="svgAttrs" :viewBox="viewBox">
      <image :href="background" x="0" y="0" :width="layoutWidth" :height="layoutHeight" />
      <slot></slot>
    </svg>
  </div>
</template>

<style scoped>
.svg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background: black;

  svg {
    background: #111;
  }
}
</style>
