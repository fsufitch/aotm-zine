<script setup lang="ts">
import { computed, onBeforeMount, onMounted, watchEffect } from "vue";
import { useSecretCodeStore } from "./secret-code";
import { useRouter } from "vue-router";

const router = useRouter();

const secretCodeStore = useSecretCodeStore();
const displayedSecretCode = computed(() => secretCodeStore.codeInputs);

// Key type handler
const onKeyDown = (event: KeyboardEvent) => {
  secretCodeStore.handleKeyPress(event.key);
};
onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});
onBeforeMount(() => {
  window.removeEventListener("keydown", onKeyDown);
});

watchEffect(() => {
  if (!secretCodeStore.codeCorrect) {
    return;
  }
  setTimeout(() => {
    router.push("/kaboom");
  }, 1000);
});
</script>

<template>
  <div class="page">
    <div class="innerPage">
      <span class="secret-code-digit digit-1">
        {{ displayedSecretCode[0] }}
      </span>

      <span class="secret-code-digit digit-2">
        {{ displayedSecretCode[1] }}
      </span>

      <span class="secret-code-digit digit-3">
        {{ displayedSecretCode[2] }}
      </span>

      <span class="secret-code-digit digit-4">
        {{ displayedSecretCode[3] }}
      </span>

      <span class="secret-code-digit digit-5">
        {{ displayedSecretCode[4] }}
      </span>
      <span class="secret-code-digit digit-6">
        {{ displayedSecretCode[5] }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url(./landscape-bg-blurred.jpg);
  background-position: center center;
  background-size: cover;
}

.innerPage {
  width: 85%;
  aspect-ratio: 16/9;

  background-image: url(./landscape-bg.jpg);
  background-position: center center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .secret-code-digit {
    position: absolute;

    &.digit-1 {
      top: 43.5%;
      left: 44%;
      transform: translate(-50%, -50%);
    }

    &.digit-2 {
      top: 43.5%;
      left: 48.5%;
      transform: translate(-50%, -50%);
    }

    &.digit-3 {
      top: 43.5%;
      left: 53%;
      transform: translate(-50%, -50%);
    }

    &.digit-4 {
      top: 47.5%;
      left: 46.5%;
      transform: translate(-50%, -50%);
    }

    &.digit-5 {
      top: 47.5%;
      left: 50.5%;
      transform: translate(-50%, -50%);
    }

    &.digit-6 {
      top: 51.5%;
      left: 48.5%;
      transform: translate(-50%, -50%);
    }

    font-size: 2rem;
    color: black;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
}
</style>
