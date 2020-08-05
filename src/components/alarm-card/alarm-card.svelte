<script>
  import ALARM_REPEAT_OPTIONS from '../../constants/alarm-repeat-options';

  export let link = '';
  export let time = '';
  export let repeat = '';
</script>

<a href={link} class="alarm-card">
  <div class="alarm-card__time">
    {time}
  </div>

  <div class="alarm-card__repeat">
    {ALARM_REPEAT_OPTIONS.find(a => a.value === repeat).text}
  </div>
</a>

<style>
  .alarm-card {
    display: block;
    text-decoration: inherit;
    color: inherit;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    padding: 20px;
  }

  .alarm-card__time {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .alarm-card__repeat {
    white-space: nowrap;
  }

  .alarm-card:hover {
    box-shadow: 0 0 5px 0 rgba(0,0,0,.1);
  }
</style>
