import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import ErrorView from '../views/ErrorView.vue';
import MainPage from '../pages/MainPage.vue';
import CaseStudyNavix from '@/pages/CaseStudyNavix.vue';
import CaseStudyAtlas from '@/pages/CaseStudyAtlas.vue';
import CaseStudyPrimoro from '@/pages/CaseStudyPrimoro.vue';
import CaseStudyPending from '@/pages/CaseStudyPending.vue';

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
      {
        // Not written up yet — Primoro-style holding page until the case study lands
        path: '/case-studies/cps',
        component: CaseStudyPending,
        meta: {
          caseInfo: {
            title: 'CPS',
            eyebrow: 'Case Study · Logistics · In Progress',
            tagline: 'A driver scoring platform that builds carrier credibility through trip data',
            status: 'Active Project',
            context:
              'CPS scores drivers on real trip data so carriers can build credibility they can actually point to. I own design and product strategy on this one — the design follows the findings, not the other way around.',
            facts: [
              { label: 'Role', value: 'Product Designer + Strategist' },
              { label: 'Engagement', value: 'Part-time' },
              { label: 'Timeline', value: '2025 — Present' },
              { label: 'Platform', value: 'Web · Mobile' },
              { label: 'Industry', value: 'Logistics' },
            ],
          },
        },
      },
      {
        path: '/case-studies/truckpedia',
        component: CaseStudyPending,
        meta: {
          caseInfo: {
            title: 'Truckpedia',
            eyebrow: 'Case Study · Logistics · TMS',
            tagline: 'Making every carrier’s day a little less chaotic',
            status: 'Wrapped · Write-up pending',
            context:
              'Truckpedia is a transport management system spanning web and mobile. I worked across the dispatch calendar, accounting module, load creation, and the driver app — enhancing the experience for the people running loads all day.',
            facts: [
              { label: 'Role', value: 'UX and UI Designer' },
              { label: 'Timeline', value: '2022 — 2023' },
              { label: 'Platform', value: 'Web · Mobile' },
              { label: 'Industry', value: 'Logistics · TMS' },
            ],
          },
        },
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
