import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import ErrorView from '../views/ErrorView.vue';
import MainPage from '../pages/MainPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import CaseStudiesPage from '@/pages/CaseStudiesPage.vue';
import LoadingElement from '@/components/LoadingElement.vue';
import CaseStudyItem from '@/pages/CaseStudyItem.vue';
import CaseStudyGenie from '@/pages/CaseStudyGenie.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';
import CaseStudyNavix from '@/pages/CaseStudyNavix.vue';

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
        component: CaseStudiesPage,
        children: [
          {
            path: 'genie',
            component: CaseStudyGenie,
        },
          {
            path: 'navix',
            component: CaseStudyNavix,
        },
        {
          path: 'under-construction',
          component: UnderConstruction,
        },], //Case Studies
      },
      {
        path: '/case-study-item',
        component: CaseStudyItem, //Case Studies
      },
      {
        path: '/loading',
        component: LoadingElement,
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

  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
