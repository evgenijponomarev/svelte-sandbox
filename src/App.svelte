<script>
  import Router from 'svelte-spa-router';

  import Page from './components/page/page';
  import Header from './components/header/header';
  import Footer from './components/footer/footer';
  import ContentPlace from './components/content-place/content-place';

  import Alarms from './views/alarms/alarms';
  import AlarmAdd from './views/alarm-add/alarm-add';
  import AlarmEdit from './views/alarm-edit/alarm-edit';
  import About from './views/about/about';
  import Profile from './views/profile/profile';
  import Sandbox from './views/sandbox';

  const routes = {
    '/': Alarms,
    '/alarms': Alarms,
    '/alarm-add': AlarmAdd,
    '/alarms/:id': AlarmEdit,
    '/about': About,
    '/profile': Profile,
    '/sandbox': Sandbox,
  };
</script>

<Page>
  <Header mix="page__header"/>

  <ContentPlace mix="page__body">
    <Router {routes}/>
  </ContentPlace>

  <Footer mix="page__footer"/>
</Page>
