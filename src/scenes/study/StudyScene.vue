<script setup lang="ts">
import SvgLayout from "@/layout/SvgLayout.vue";
import PlaceholderBackground from "./assets/ph-background.png";
import { useArtBaseURL, useArtURL } from "@/art";
import { useDisplayMode } from "@/utils/display";
import { computed, watchEffect } from "vue";
import { pointsToSVGString, type SVGPoints } from "@/utils/svg";

const backgroundArt = useArtURL("/scenes/study/assets/background.png", PlaceholderBackground);

const displayMode = useDisplayMode();

const computerPoints = computed<SVGPoints>(() =>
  backgroundArt.value.provisional
    ? [
        // Provisional art is 1600x900
        [1039, 275],
        [1373, 268],
        [1369, 514],
        [1043, 491],
      ]
    : [
        // No final art yet
      ],
);

const bookOne = computed<SVGPoints>(() =>
  backgroundArt.value.provisional
    ? [
        // Provisional art is 1600x900
        [412, 215],
        [445, 218],
        [449, 342],
        [424, 340],
      ]
    : [
        // No final art yet
      ],
);

const bookTwo = computed<SVGPoints>(() =>
  backgroundArt.value.provisional
    ? [
        // Provisional art is 1600x900
        [420, 400],
        [456, 403],
        [458, 527],
        [433, 525],
      ]
    : [
        // No final art yet
      ],
);
</script>

<template>
  <SvgLayout
    :background="backgroundArt.url"
    layout-width="1600"
    layout-height="900"
    :scrollable="displayMode.orientation == 'portrait'"
  >
    <polygon
      v-if="computerPoints.length > 0"
      :points="pointsToSVGString(computerPoints)"
      fill="rgba(255, 0, 0, 0.5)"
      stroke="red"
      stroke-width="2"
      @click="() => console.log('Clicked computer!')"
    />
    <polygon
      v-if="bookOne.length > 0"
      :points="pointsToSVGString(bookOne)"
      fill="rgba(0, 255, 0, 0.5)"
      stroke="green"
      stroke-width="2"
      @click="() => console.log('Clicked book one!')"
    />
    <polygon
      v-if="bookTwo.length > 0"
      :points="pointsToSVGString(bookTwo)"
      fill="rgba(0, 0, 255, 0.5)"
      stroke="blue"
      stroke-width="2"
      @click="() => console.log('Clicked book two!')"
    />
  </SvgLayout>
</template>
