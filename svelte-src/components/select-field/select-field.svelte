<script>
  export let mix = '';
  export let id = '';
  export let name = '';
  export let options = [{ value: '', text: '' }];
  export let value;
  export let onChange;

  const params = {
    id,
    name,
  };
</script>

<select
  class={['select-field', mix].join(' ')}
  on:change={onChange}
  on:blur={onChange}
  bind:value={value}
  {...params}
>
  {#each options as option}
    <option value={option.value}>
      {option.text}
    </option>
  {/each}
</select>

<style>
  .select-field {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    padding: 0 5px;
    border: 1px solid #777;
    border-radius: 0;
    outline: none;
    height: 40px;
    line-height: 40px;
  }

  .text-field:focus {
    box-shadow: inset 0 0 10px -5px rgba(0,0,0,.5);
  }
</style>
