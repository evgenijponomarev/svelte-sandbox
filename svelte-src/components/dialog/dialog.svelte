<script>
  import Title from '../title/title.svelte';

  export let onClose = () => {};
  export let mix = '';
</script>

<div class={['dialog', mix].join(' ')}>
  <div class="dialog__close-button" on:click={onClose}/>

  <Title mix="dialog__title">
    <slot name="title"/>
  </Title>

  <div class="dialog__content">
    <slot name="content"/>
  </div>
</div>

<style>
  .dialog {
    background-color: #fff;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }

  .dialog__close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .dialog__close-button::before,
  .dialog__close-button::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #333;
    top: 50%;
    left: 0;
  }

  .dialog__close-button::before {
    transform: rotate(45deg);
  }

  .dialog__close-button::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 400px) {
    .dialog {
      width: 100%;
      height: 100%;
    }
  }
</style>
