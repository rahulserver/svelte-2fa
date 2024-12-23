<script lang="ts">
    export let lockState: "default" | "correct" | "wrong" = "default";
  </script>
  
  <div
    class={`w-12 h-12 flex items-center justify-center rounded-full
      ${
        lockState === "default" ? "bg-blue-200" :
        lockState === "wrong" ? "bg-red-200" : "bg-green-200"
      }`}
  >
    {#if lockState === "correct"}
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 11V7a4 4 0 1 1 8 0v4M9 11H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-6" />
      </svg>
    {:else}
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 1 0-8 0v4M9 11H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-6" />
      </svg>
    {/if}
  </div>