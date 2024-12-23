<script lang="ts">
    export let value: string = "";
    export let index: number;
    export let onInput: (index: number) => void;
  
    function handleInput(event: Event): void {
      const target = event.target as HTMLInputElement;
      const newValue = target.value.slice(0, 1); // Ensure single digit
      onInput(index);
      value = newValue;
    }
  </script>
  
  <input
    type="text"
    maxlength="1"
    bind:value
    on:input={handleInput}
    class="w-12 h-12 text-center border rounded-md text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />