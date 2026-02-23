import { ref, computed } from "vue";
import { defineStore } from "pinia";

const CORRECT_CODE = "LTG123";

export const useSecretCodeStore = defineStore("secret-code", () => {
  const codeInputs = ref<string[]>(["", "", "", "", "", ""]);

  const updateInput = (index: number, value: string) => {
    if (index >= 0 && index < codeInputs.value.length) {
      codeInputs.value[index] = value;
    } else {
      console.warn(`Index ${index} is out of bounds for code inputs.`);
    }
  };

  const currentInput = ref<number>(-1);

  const handleKeyPress = (key: string) => {
    if (currentInput.value < 0) {
      currentInput.value = 0;
    }

    if (currentInput.value >= codeInputs.value.length) {
      currentInput.value = 0; // Reset to the first input if we exceed the length
    }

    if (currentInput.value < codeInputs.value.length) {
      if (key === "Backspace") {
        updateInput(currentInput.value, "");
        currentInput.value--;
      } else if (key === "Delete" || key === " ") {
        updateInput(currentInput.value, "");
      } else if (/^[a-zA-Z0-9]$/.test(key)) {
        updateInput(currentInput.value, key.toUpperCase());
        currentInput.value++;
      }
    }
  };
  const codeCorrect = computed(() => codeInputs.value.join("") === CORRECT_CODE);

  return { codeInputs, updateInput, handleKeyPress, codeCorrect };
});
