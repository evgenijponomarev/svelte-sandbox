import App from './App.svelte';

// import logRenderTime from './services/log-render-time';

const app = new App({
  target: document.getElementById('root'),
  props: {
    currentRoute: location.hash,
  }
});

window.onhashchange = function () {
  app.$set({
    currentRoute: location.hash
  });
};

window.app = app;

// logRenderTime();

export default app;
