<script>
  export let mix = '';

  const year = new Date().getFullYear();
</script>

<footer class={['footer', mix].join(' ')}>
  <div class="footer__copyright">Будильник на Svelte {year}</div>

  <div class="footer__about-link">
    <a href="#/about">О сервисе</a>
  </div>
</footer>

<style>
  .footer {
    display: flex;
    box-sizing: border-box;
    height: 40px;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid #ddd;
    font-weight: lighter;
  }

  .footer__copyright {
    color: #999;
  }
</style>
