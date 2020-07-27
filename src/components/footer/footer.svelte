<script>
  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer__copyright">Будильник на Svelte {year}</div>

  <div class="footer__about-link">
    <a href="/about">О сервисе</a>
  </div>
</footer>

<style>
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid #ddd;
  }

  .footer__copyright {
    color: #999;
  }
</style>
