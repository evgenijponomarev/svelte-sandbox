<div class="button-group">
  <slot/>
</div>

<style>
  .button-group {
    display: flex;
    align-items: center;
  }

  :global(.button-group__item) {
    font-size: 14px;
  }

  :global(.button-group__item + .button-group__item) {
    margin-left: 10px;
  }
</style>
