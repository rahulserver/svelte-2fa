<script lang="ts">
    export let digitsLeft: number;
    export let lockState: "default" | "correct" | "wrong";
  </script>
  
  <button
    class={`w-full py-2 rounded-md
      ${
        digitsLeft === 0
          ? lockState === "wrong" ? "bg-red-500 text-white" : "bg-blue-500 text-white"
          : "bg-gray-300 text-gray-500"
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