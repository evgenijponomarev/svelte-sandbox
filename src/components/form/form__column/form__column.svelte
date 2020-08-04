<div class="form__column">
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
</style>
