import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import ErrorView from '../views/ErrorView.vue';
import MainPage from '../pages/MainPage.vue';
import CaseStudyNavix from '@/pages/CaseStudyNavix.vue';
import CaseStudyAtlas from '@/pages/CaseStudyAtlas.vue';
import CaseStudyPrimoro from '@/pages/CaseStudyPrimoro.vue';

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
        // Convenience: /about points at the home About section
        path: '/about',
        redirect: { path: '/home', hash: '#about' },
      },
      {
        path: '/case-studies/navix',
        component: CaseStudyNavix,
      },
      {
        path: '/case-studies/atlas',
        component: CaseStudyAtlas,
      },
      {
        path: '/case-studies/primoro',
        component: CaseStudyPrimoro,
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
  history: createWebHistory(import.meta.env.BASE_URL, '/app'),
  routes,

  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0 };
  },
});

export default router;
