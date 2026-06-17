# Styling

The app combines **Tailwind CSS 3** (primary, utility-first) with **Vuetify 3** components, plus per-component scoped CSS for bespoke animations.

## Global styles

[src/style.css](../src/style.css) is imported first in `main.js` and contains:

```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
```

- Imports the **Geist** variable font (weights 100–900) from Google Fonts.
- Pulls in the three Tailwind layers.
- Enables smooth scrolling for in-page anchor navigation (e.g. the `#contact` links).

## Tailwind configuration

[tailwind.config.js](../tailwind.config.js):

- **Content globs:** `./public/index.html` and `./src/**/*.{vue,js,ts,jsx,tsx}`.
- **`fontFamily.sans`** is overridden to `['Geist', 'sans-serif']`, so default sans text uses Geist.
- The default Tailwind breakpoints are **replaced** with a custom set (note: `screens` is set directly, not under `extend`, so it overrides defaults):

| Token | Min width |
| --- | --- |
| `xs` | 375px |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1440px |
| `3xl` | 1536px |
| `4xl` | 1920px |

The layout is mobile-first and uses these prefixes heavily, e.g. `xs:text-[24px] lg:text-[28px] xl:text-[32px]`.

## PostCSS

[postcss.config.js](../postcss.config.js) runs `tailwindcss` and `autoprefixer`.

## Scoped styles & animations

Bespoke effects live in component `<style scoped>` blocks and Tailwind arbitrary classes:

- **Marquee** — `CompaniesSection` scrolls two logo rows in opposite directions on a continuous loop, pausing on hover.
- **Light sweep** — `RouteLink` animates a gradient sweep (`animate-light-sweep` / `animate-reverse-light-sweep`) over the link on hover; the active link stays highlighted.
- **Hover arrow** — `CaseStudyButton` translates its arrow icon on hover (`translate-x-2`, `transition-transform`).
- **Entrance motion** — `v-motion-*` directives from `@vueuse/motion` slide elements in once when they become visible.

## Vuetify theme

Configured in [src/plugins/vuetify.js](../src/plugins/vuetify.js) with `defaultTheme: 'light'` and the `mdi` icon set. All Vuetify components and directives are registered globally.
