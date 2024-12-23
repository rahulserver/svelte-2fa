<script lang="ts">
  export let lockState: "default" | "correct" | "wrong" = "default";
</script>

<div class="relative flex items-center justify-center">
  {#if lockState !== "default"}
    <div 
      class={`absolute w-16 h-16 rounded-full 
        ${lockState === "wrong" ? "animate-pulse-red" : "animate-pulse-green"}`}
    ></div>
  {/if}
  <div
    class={`w-16 h-16 flex items-center justify-center rounded-full z-10
      transition-colors duration-300
      ${
        lockState === "default"
          ? "bg-blue-300"
          : lockState === "wrong"
            ? "bg-red-300"
            : "bg-green-300"
      }`}
  >
    {#if lockState === "correct"}
      <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 19V11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19Z"
          stroke="#000000"
          stroke-width="0.75"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="15" r="2" stroke="#000000" stroke-width="0.75" stroke-linejoin="round" />
        <path
          d="M16 10V6.5C16 5.11929 17.1193 4 18.5 4V4V4C19.8807 4 21 5.11929 21 6.5V10"
          stroke="#000000"
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {:else}
      <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 19V11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19Z"
          stroke="#000000"
          stroke-width="0.75"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="15" r="2" stroke="#000000" stroke-width="0.75" stroke-linejoin="round" />
        <path
          d="M8 10V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V10H8Z"
          stroke="#000000"
          stroke-width="0.75"
          stroke-linejoin="round"
        />
      </svg>
    {/if}
  </div>
</div>
