<script>
  import TextField from '../text-field/text-field';
  import SelectField from '../select-field/select-field';

  export let id = '';
  export let name = '';
  export let label = '';
  export let type;
  export let options;
  export let value;

  const params = { id, name };
</script>

<div class="form-field">
  <label for={id} class="form-field__label">
    {label}
  </label>

  {#if type === 'select'}
    <SelectField
      mix="form-field__control"
      {options}
      bind:value={value}
      {...params}
    />
  {:else}
    <TextField
      mix="form-field__control"
      {type}
      bind:value={value}
      {...params}
    />
  {/if}
</div>

<style>
  .form-field__label {
    display: block;
    color: #333;
    font-size: 14px;
    margin-bottom: 5px;
  }
</style>
