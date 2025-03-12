export default {
  install(app) {
    app.config.globalProperties.$scroll = {
      onShowView(e) {
        const id = e.target.getAttribute('href');
        if(!id) return;
        const el = document.querySelector(id);
        if(!el) return;
        el.scrollIntoView({ behavior: 'smooth' });      }
    }
  }
};
