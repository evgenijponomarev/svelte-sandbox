<script>
  export let type = 'text';
  export let mix = '';
  export let id = '';
  export let name = '';
  export let value = '';
  export let onChange;
</script>

<input
  class={['text-field', mix].join(' ')}
  on:change={onChange}
  {id}
  {name}
  {type}
  {value}
/>

<style>
  .text-field {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    padding: 0 5px;
    border: 1px solid #777;
    border-radius: 0;
    outline: none;
  }

  .text-field:focus {
    box-shadow: inset 0 0 10px -5px rgba(0,0,0,.5);
  }
</style>
