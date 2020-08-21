<script>
  import ProfileButton from '../profile-button/profile-button.svelte';

  export let mix = '';
</script>

<header class={['header', mix].join(' ')}>
  <a href="#/" class="header__title">Будильник</a>

  <ProfileButton/>
</header>

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid #ddd;
    font-weight: lighter;
    box-sizing: border-box;
    overflow: scroll;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }

  .header::-webkit-scrollbar {
    display: none;
  }

  .header__title {
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: none;
    color: rgb(0,100,200);
  }

  .header__title:hover {
    text-decoration: none;
  }
</style>
