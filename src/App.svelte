<script>
  import Page from './components/page/page';
  import Header from './components/header/header';
  import Footer from './components/footer/footer';
  import ContentPlace from './components/content-place/content-place';

  import Alarms from './views/alarms/alarms';
  import AlarmAdd from './views/alarm-add/alarm-add';
  import AlarmEdit from './views/alarm-edit/alarm-edit';
  import About from './views/about/about';
  import Profile from './views/profile/profile';
  import Sandbox from './views/sandbox/sandbox';

  export let currentRoute = '';

  const routes = [
    {
      path: /^$/,
      component: Alarms,
    },
    {
      path: /^#\/$/,
      component: Alarms,
    },
    {
      path: /^#\/alarms$/,
      component: Alarms,
    },
    {
      path: /^#\/alarm\-add$/,
      component: AlarmAdd,
    },
    {
      path: /^#\/alarms\/\d+$/,
      component: AlarmEdit,
    },
    {
      path: /^#\/about$/,
      component: About,
    },
    {
      path: /^#\/profile$/,
      component: Profile,
    },
    {
      path: /^#\/sandbox$/,
      component: Sandbox,
    }
  ];
</script>

<Page>
  <Header mix="page__header"/>

  <ContentPlace mix="page__body">
    {#each routes as route}
      {#if route.path.test(currentRoute)}
        <svelte:component this={route.component}/>
      {/if}
    {/each}
  </ContentPlace>

  <Footer mix="page__footer"/>
</Page>
