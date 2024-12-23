<script lang="ts">
  import { lockStore } from '../stores/lockStore';

  export let value: string = "";
  export let index: number;
  export let onInput: (index: number) => void;
  export let lockState: "default" | "correct" | "wrong" = "default";

  function handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = target.value.slice(0, 1);
    
    // Always update value and trigger onInput, even if newValue is empty
    value = newValue;
    onInput(index);

    if (newValue) {
      // Move focus to the next field
      const nextInput = document.querySelector(
        `input[data-index="${index + 1}"]`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === "Backspace") {
      if (value === "") {
        // Only move to previous field if current field is empty
        const prevInput = document.querySelector(
          `input[data-index="${index - 1}"]`
        ) as HTMLInputElement;
        if (prevInput) {
          prevInput.focus();
        }
      } else {
        // If current field has a value, just clear it
        value = "";
        onInput(index);
      }
    }

    if (
      event.shiftKey &&
      (event.key === "ArrowLeft" || event.key === "ArrowRight")
    ) {
      event.preventDefault();
      const direction = event.key === "ArrowLeft" ? -1 : 1;
      const targetIndex = index + direction;
      const inputs = Array.from(
        document.querySelectorAll("input[data-index]")
      ) as HTMLInputElement[];

      if (inputs[targetIndex]) {
        inputs[targetIndex].focus();
        inputs[targetIndex].select();
      }
    }
  }

  function handlePaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData("text") ?? "";
    const digits = pastedData.match(/\d/g);

    if (digits) {
      const inputs = Array.from(
        document.querySelectorAll("input[data-index]")
      ) as HTMLInputElement[];

      digits.forEach((digit, i) => {
        if (inputs[index + i]) {
          inputs[index + i].value = digit;
          inputs[index + i].dispatchEvent(new Event("input"));
        }
      });
    }
  }
</script>

<input
  type="text"
  inputmode="numeric"
  maxlength="1"
  bind:value
  on:input={handleInput}
  on:keydown={handleKeydown}
  on:paste={handlePaste}
  data-index={index}
  class="w-16 h-20 text-center text-3xl font-semibold border rounded-xl
      bg-white
      transition-colors
      duration-200
      focus:outline-none
      focus:ring-2
      {lockState === 'wrong'
    ? 'border-red-500 text-red-500 focus:border-red-500 focus:ring-red-200 animate-shake'
    : value
      ? 'border-blue-500 text-blue-500 focus:border-blue-500 focus:ring-blue-200'
      : 'border-gray-300 text-blue-500 focus:border-blue-500 focus:ring-blue-200'}"
/>
