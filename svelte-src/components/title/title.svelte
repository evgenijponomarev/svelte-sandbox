<script>
  export let mix = '';
</script>

<h1 class={['title', mix].join(' ')}>
  <slot/>
</h1>

<style>
  .title {
    font-size: 32px;
    color: #333;
    font-weight: lighter;
    margin: 0;
    padding: 0 0 20px;
  }
</style>
