<script>
  import AlarmCard from '../../components/alarm-card/alarm-card';

  export let alarms = [];
</script>

<div class="alarm-list">
  {#each alarms as alarm}
    <div class="alarm-list__item">
      <AlarmCard
        link="#/alarms/{alarm.id}"
        time={alarm.time}
        repeat={alarm.repeat}
      />
    </div>
  {/each}
</div>

<style>
  .alarm-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    padding-top: 10px;
  }

  .alarm-list__item {
    width: 50%;
    max-width: 400px;
    min-width: 200px;
    box-sizing: border-box;
    flex-grow: 1;
    padding: 10px;
  }
</style>
