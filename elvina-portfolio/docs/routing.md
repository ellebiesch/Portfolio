# Routing

Routes are defined in [src/router/index.js](../src/router/index.js) using Vue Router 4.

## Route table

All main routes are children of the `/` route, which renders `MainView` (the shared layout with nav, loader, and footer).

| Path | Component | Notes |
| --- | --- | --- |
| `/home` | `MainPage` | Home; also the alias for `/` |
| `/` | `MainPage` | Alias of `/home` |
| `/about` | `AboutPage` | Bio + design process + tools |
| `/case-studies` | `CaseStudiesPage` | Lists case studies; hosts a nested `<router-view/>` |
| `/case-studies/genie` | `CaseStudyGenie` | Nested case study |
| `/case-studies/navix` | `CaseStudyNavix` | Nested case study |
| `/case-studies/under-construction` | `UnderConstruction` | Nested placeholder |
| `/case-study-item` | `CaseStudyItem` | Standalone item route |
| `/env-test` | `EnvTest` | Debug page for env vars |
| `/loading` | `LoadingElement` | Renders the loader in isolation |
| `/:pathMatch(.*)*` | `ErrorView` | 404 catch-all (named `ErrorView`) |

### Nesting structure

```
/ (MainView)
├── /home  (alias /)        → MainPage
├── /about                  → AboutPage
├── /case-studies           → CaseStudiesPage
│   ├── genie               → CaseStudyGenie
│   ├── navix               → CaseStudyNavix
│   └── under-construction  → UnderConstruction
├── /case-study-item        → CaseStudyItem
├── /env-test               → EnvTest
└── /loading                → LoadingElement
/:pathMatch(.*)*            → ErrorView
```

## Router configuration

```js
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL, '/app'),
  routes,
  scrollBehavior() {
    return { top: 0 }; // scroll to top on every navigation
  },
});
```

- **History mode** with a base of `/app` (`createWebHistory`).
- **`scrollBehavior`** returns `{ top: 0 }` so every navigation starts at the top of the page.

## Linking between routes

Navigation links use two purpose-built components (see [components.md](components.md)):

- **`RouteLink`** — header nav links with an animated light-sweep and an `isActive` state.
- **`CaseStudyButton`** — "See Case Study" links that build a target as `` `${to}/${caseStudy}` `` (e.g. `/case-studies/genie`) with a hover arrow animation.
