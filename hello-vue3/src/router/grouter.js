import { ref, inject } from 'vue';

const ROUTER_KEY = '__router__';

class router {
  constructor(options) {
    this.history = options.history;
    this.routes = options.routes;
    this.current = ref(this.history.url);

    this.history.bindEvents(() => {
      this.current.vaule = window.location.hash.slice(1);
    })
  }
  install(app) {
    app.provide(ROUTER_KEY, this)
  }
}
function createRouter(options) {
  return new Router(options)
}
function useRouter(options) {
  return inject(ROUTER_KEY)
}
function createWebHashHistory() {
  function bindEvents(fn) {
    window.addEventListener('hashchange', fn);

  }
  return {
    bindEvents,
    url: window.location.hash.slice(1) || '/'
  }
}

export { createRouter, useRouter, createWebHashHistory }