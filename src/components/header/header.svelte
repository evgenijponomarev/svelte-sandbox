<script>
  import MainMenu from '../main-menu/main-menu.svelte';
  import ProfileButton from '../profile-button/profile-button.svelte';
</script>

<header class="header">
  <a href="/" class="header__title">Будильник</a>

  <MainMenu/>

  <ProfileButton/>
</header>

<style>
  .header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    font-weight: lighter;
  }

  .header__title {
    font-size: 24px;
    text-transform: uppercase;
  }

  .header__title:hover {
    text-decoration: none;
  }
</style>
