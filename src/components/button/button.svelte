<script>
  export let to;
</script>

{#if to}
  <a href={to} class="button">
    <slot/>
  </a>
{:else}
  <button class="button">
    <slot/>
  </button>
{/if}

<style>
  .button {
    display: inline-block;
    border: 2px solid #ddd;
    background: none;
    padding: 8px 20px;
    border-radius: 4px;
    color: #444;
  }

  .button:hover {
    text-decoration: none;
    background-color: #ddd;
  }
</style>
