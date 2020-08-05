<script>
  export let to;
  export let mix;
  export let type = 'button';
  export let onClick = () => {};

  const className = ['button', mix].join(' ');
</script>

{#if to}
  <a href={to} class={className}>
    <slot/>
  </a>
{:else}
  <button class={className} {type} on:click={onClick}>
    <slot/>
  </button>
{/if}

<style>
  .button {
    display: block;
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
    box-sizing: border-box;
  }

  .button:hover,
  .button:focus {
    outline: none;
    text-decoration: none;
    background-color: #777;
    color: #ddd;
  }
</style>
