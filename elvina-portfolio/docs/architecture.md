# Architecture

## Tech stack

| Concern | Library | Version |
| --- | --- | --- |
| UI framework | Vue | `^3.4.29` |
| Routing | Vue Router | `^4.0.3` |
| Component library | Vuetify | `^3.7.4` |
| Build tool | Vite | `^5.3.1` |
| Vue SFC support | `@vitejs/plugin-vue` | `^5.0.5` |
| Utility CSS | Tailwind CSS | `^3.4.13` |
| Animations (directives) | `@vueuse/motion` | `^2.2.x` |
| Animate-on-scroll | AOS | `^2.3.4` |
| Carousel/slider | Swiper | `^12.0.3` |
| Image lazy loading | `vue-lazyload-next` | `^0.0.2` |
| Polyfills | core-js | `^3.8.3` |

Tooling: ESLint 8 (`plugin:vue/vue3-essential`), Prettier 3, PostCSS + Autoprefixer.

There is **no global state store** (no Pinia/Vuex) — components manage their own local data. The codebase mixes **Composition API** (`setup()`) and **Options API** (`data()`/`computed()`) styles.

## Folder conventions

```
src/
├── main.js          # app bootstrap & plugin registration
├── App.vue          # root component (renders <router-view/>)
├── style.css        # global styles, Tailwind directives, Geist font import
├── views/           # layout wrappers (MainView, ErrorView)
├── pages/           # full-page route targets (MainPage, AboutPage, CaseStudy*…)
├── sections/        # reusable page blocks (Discover, Testimonials, Tools…)
├── components/      # small reusable UI (Navigation, Footer, CaseStudy, buttons…)
├── router/          # Vue Router config (index.js)
├── plugins/         # plugin setup (vuetify.js)
└── assets/          # images, SVGs, logos
```

Layering, broadly: **views** (layout) → **pages** (route content) → **sections** (large visual blocks) → **components** (small reusable units).

See [components.md](components.md) for the per-file reference.

## App bootstrap & entry flow

1. **[index.html](../index.html)** — single `<div id="app">` mount point; loads `/src/main.js` as a module. Includes the Google Analytics snippet.
2. **[src/main.js](../src/main.js)** — creates the Vue app and registers plugins in this order:
   ```js
   app.use(MotionPlugin).use(router).use(vuetify)
      .use(VueLazyLoad, { preLoad: 1.3, attempt: 3, throttleWait: 500 });
   app.mount('#app');
   ```
3. **[src/App.vue](../src/App.vue)** — thin root that renders the router outlet.
4. **[src/views/MainView.vue](../src/views/MainView.vue)** — the shared layout for all main routes. It shows a `LoadingElement` for the first **1300 ms** (via a `setTimeout` in `mounted()`), then renders `NavigationElement`, the `<router-view/>`, and a `FooterElement`.

## Plugins

- **Vuetify** ([src/plugins/vuetify.js](../src/plugins/vuetify.js)) — registers all Vuetify components and directives, uses the `mdi` icon set, and defaults to the `light` theme.
- **`@vueuse/motion`** — provides `v-motion-*` directives used for entrance animations (e.g. `v-motion-slide-visible-once-left`).
- **`vue-lazyload-next`** — provides the `v-lazy` directive for deferred image loading.

## Path alias

`@` → `src/`, configured in [vite.config.js](../vite.config.js) (`resolve.alias`) and [jsconfig.json](../jsconfig.json). Both `@/...` and relative imports are used across the codebase.
