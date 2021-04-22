<script>
  export let mix = '';
</script>

<div class={['content-place', mix].join(' ')}>
  <slot/>
</div>

<style>
  .content-place {
    padding: 40px 10px;
  }
</style>
