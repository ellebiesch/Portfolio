# Elvina Portfolio — Documentation

`elvina-portfolio` is a single-page UX/UI design portfolio for **Elvina Garcia**, built with **Vue 3** and **Vite**. It showcases services, work experience, company logos, testimonials, and case studies.

This `docs/` directory describes how the app is built, how to run it, and how the code is organized.

## Contents

| Doc | What's inside |
| --- | --- |
| [getting-started.md](getting-started.md) | Prerequisites, install, npm scripts, environment variables, dev server |
| [architecture.md](architecture.md) | Tech stack, folder conventions, app bootstrap/entry flow |
| [routing.md](routing.md) | Route table, nested case-study routes, history mode & scroll behavior |
| [components.md](components.md) | Reference of views, pages, sections, and components with key props |
| [styling.md](styling.md) | Tailwind config, custom breakpoints, Geist font, animations |
| [deployment.md](deployment.md) | Vercel SPA rewrite, build output, analytics |

## Quick facts

- **Framework:** Vue 3 (mixed Composition + Options API)
- **Build tool:** Vite 5 (dev server on port `5050`)
- **Routing:** Vue Router 4 (history mode, base `/app`)
- **UI / styling:** Vuetify 3 + Tailwind CSS 3, Geist font
- **Animations:** `@vueuse/motion`, AOS, Swiper; lazy images via `vue-lazyload-next`
- **Hosting:** Vercel

## Repository layout (root)

```
Portfolio/
├── elvina-portfolio/   ← active Vue 3 app (documented here)
└── portfolio/          ← legacy static .html pages (not maintained)
```

All documentation here covers the active `elvina-portfolio/` app.
