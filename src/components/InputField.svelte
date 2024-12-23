<script lang="ts">
    export let value: string = "";
    export let index: number;
    export let onInput: (index: number) => void;
    export let lockState: "default" | "correct" | "wrong" = "default";
  
    function handleInput(event: Event): void {
      const target = event.target as HTMLInputElement;
      const newValue = target.value.slice(0, 1); // Ensure single digit
      
      if (newValue.length === 1) {
        value = newValue;
        onInput(index);
        // Move to next input if available
        const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }

    function handleKeydown(event: KeyboardEvent): void {
      if (event.key === 'Backspace') {
        if (value === '') {
          // Move to previous input if current is empty
          const prevInput = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement;
          if (prevInput) {
            prevInput.focus();
          }
        } else {
          // Clear current value
          value = '';
          onInput(index);
        }
      }
    }
</script>
  
<input
  type="text"
  maxlength="1"
  bind:value
  on:input={handleInput}
  on:keydown={handleKeydown}
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
        : 'border-gray-300 text-blue-500 focus:border-blue-500 focus:ring-blue-200'
    }"
/>