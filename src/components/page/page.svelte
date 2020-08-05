<div class="page">
  <slot/>
</div>

<style>
  .page {
    max-width: 800px;
    margin: 0 auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  :global(.page__body) {
    flex-grow: 1;
  }
</style>
