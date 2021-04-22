<script>
  import TextField from '../text-field/text-field';
  import SelectField from '../select-field/select-field';

  export let id = '';
  export let name = '';
  export let label = '';
  export let type;
  export let options;
  export let value;
  export let checked;
  export let onChange;

  const isCheckbox = type === 'checkbox';
  
  function onChangeHandler(event) {
    onChange && onChange(isCheckbox ? event.target.checked : event.target.value, event);
  }
</script>

<div
  class="form-field"
  class:form-field_type_checkbox={isCheckbox}
>
  <label for={id} class="form-field__label">
    {label}
  </label>

  {#if type === 'select'}
    <SelectField
      mix="form-field__control"
      {options}
      {id}
      {name}
      onChange={onChangeHandler}
      bind:value={value}
    />
  {:else if isCheckbox}
    <input
      class="form-field__control"
      type="checkbox"
      bind:checked={checked}
      {id}
      {name}
      on:change={onChangeHandler}
    />
  {:else}
    <TextField
      mix="form-field__control"
      {type}
      {id}
      {name}
      onChange={onChangeHandler}
      bind:value={value}
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

  .form-field_type_checkbox {
    display: flex;
  }

  .form-field_type_checkbox > .form-field__control {
    order: 1;
    margin-right: 5px;
  }

  .form-field_type_checkbox > .form-field__label {
    order: 2;
  }
</style>
