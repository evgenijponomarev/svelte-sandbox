<script>
  export let isWide = false;
</script>

<div
  class="form__column"
  class:form__column_wide={isWide}
>
  <slot/>
</div>

<style>
  .form__column {
    flex-grow: 1;
    width: 100%;
  }

  .form__column:first-child {
    padding-right: 10px;
  }

  .form__column:last-child {
    padding-left: 10px;
  }

  .form__column.form__column_wide {
    padding-left: 0;
  }
</style>
