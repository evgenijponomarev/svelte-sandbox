export default function logRenderTime() {
  window.startLoadingTime = new Date().getTime();

  const observer = new MutationObserver(function() {
    setTimeout(() => {
      window.stopLoadingTime = new Date().getTime();
      console.log('Render time:', window.stopLoadingTime - window.startLoadingTime);
    })
  });
  observer.observe(document.getElementById('root'), {
    childList: true,
    subtree: true
  });
}
