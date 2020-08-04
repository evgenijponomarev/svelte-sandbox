<nav class="main-menu">
  <a href="#/alarms" class="main-menu__item">Установить будильник</a>
  <a href="#/i-am-alarm" class="main-menu__item">Стать будильником</a>
</nav>

<style>
  .main-menu {
    display: flex;
    margin-left: 20px;
  }

  .main-menu__item {
    color: rgb(0,100,200);
    text-decoration: none;
    white-space: nowrap;
  }

  .main-menu__item:hover {
    text-decoration: underline;
  }

  .main-menu__item:visited {
  color: rgb(0,80,160);
}

  .main-menu__item + .main-menu__item {
    margin-left: 20px;
  }
</style>
