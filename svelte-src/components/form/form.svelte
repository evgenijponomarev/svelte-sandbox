<script>
  export let onSubmit = () => {};
</script>

<form class="form" on:submit|preventDefault={onSubmit}>
  <slot/>
</form>
