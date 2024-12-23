<script lang="ts">
    export let digitsLeft: number;
    export let lockState: "default" | "correct" | "wrong";
  </script>
  
  <button
    class={`w-full py-4 rounded-xl text-xl font-medium transition-colors duration-200
      ${
        digitsLeft === 0
          ? lockState === "wrong" 
            ? "bg-red-500 hover:bg-red-600 text-white" 
            : "bg-blue-500 hover:bg-blue-600 text-white"
          : "bg-gray-200 text-gray-500 cursor-not-allowed"
      }`}
    disabled={digitsLeft !== 0}
  >
    {#if digitsLeft > 0}
      {digitsLeft} digits left
    {:else if lockState === "wrong"}
      Wrong Code
    {:else}
      Let's go!
    {/if}
  </button>