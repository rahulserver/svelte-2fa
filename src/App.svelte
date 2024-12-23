<script lang="ts">
  import Card from './routes/Card.svelte';
  let currentPage = 'card';
</script>

<main>
  {#if currentPage === 'card'}
    <Card />
  {/if}
</main>
