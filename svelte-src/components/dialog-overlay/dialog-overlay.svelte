<script>
  export let onClose = () => {};

  function onKeyDown(event) {
    event.key === 'Escape' && onClose();
  }
</script>

<svelte:body on:keydown={onKeyDown}/>

<div class="dialog-overlay" on:click|self={onClose}>
  <slot/>
</div>

<style>
  .dialog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
  }
</style>
