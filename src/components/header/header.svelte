<script>
  import MainMenu from '../main-menu/main-menu.svelte';
  import ProfileButton from '../profile-button/profile-button.svelte';
</script>

<header class="header">
  <div class="header__title">Будильник</div>

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
  }

  .header__title {
    font-size: 24px;
  }
</style>
