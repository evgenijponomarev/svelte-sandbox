<script>
  export let to;
  export let type = 'button';
</script>

{#if to}
  <a href={to} class="button">
    <slot/>
  </a>
{:else}
  <button class="button" {type}>
    <slot/>
  </button>
{/if}

<style>
  .button {
    display: inline-block;
    border: 1px solid #777;
    background: none;
    padding: 0 20px;
    border-radius: 0;
    color: #333;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
  }

  .button:hover,
  .button:focus {
    outline: none;
    text-decoration: none;
    background-color: #777;
    color: #ddd;
  }
</style>
