import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import ErrorView from '../views/ErrorView.vue';
import MainPage from '../pages/MainPage.vue';
import AboutPage from '../pages/AboutPage.vue';

const routes = [
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '/home',
        alias: '/',
        component: MainPage,
      },
      {
        path: '/about',
        component: AboutPage, //aboutpage
      },
      {
        path: '/case-studies',
        component: MainPage, //Case Studies
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorView',
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,

  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
