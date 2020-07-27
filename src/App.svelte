<script>
  import Router from 'svelte-spa-router'

  import Layout from './components/layout/layout.svelte';
  import Header from './components/header/header.svelte';
  import Footer from './components/footer/footer.svelte';
  import ContentPlace from './components/content-place/content-place.svelte';

  import Alarms from './views/alarms/alarms.svelte';
  import About from './views/about/about.svelte';

  const routes = {
    '/': Alarms,
    '/alarms': Alarms,
    '/about': About,
  };
</script>

<Layout>
  <Header/>

  <ContentPlace>
    <Router {routes}/>
  </ContentPlace>

  <Footer/>
</Layout>
