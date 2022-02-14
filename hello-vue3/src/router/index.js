import {
  createRouter, createWebHashHistory
} from 'vue-router';
// import {
//   createRouter, createWebHashHistory
// } from './grouter/index.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Home from '../pages/home.vue';
import About from '../pages/about.vue';
import Test from '../pages/test.vue';
import Chart from '../components/Echarts.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})

router.afterEach(() => {
  NProgress.done();
})

export default router