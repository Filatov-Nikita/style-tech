export default {
  install(app) {
    app.config.globalProperties.$order = {
      show() {
        const el = document.querySelector('#order');
        if(!el) return;
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
