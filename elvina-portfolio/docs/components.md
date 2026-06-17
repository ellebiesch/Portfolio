# Component Reference

A guide to the building blocks in `src/`, grouped by layer. Props are listed where a component takes them.

## Views (`src/views/`)

Layout wrappers that host route content.

| Component | Description |
| --- | --- |
| `MainView` | Shared layout for all main routes. Shows `LoadingElement` for the first 1300 ms, then renders `NavigationElement`, `<router-view/>`, and `FooterElement` (footer is absolutely positioned at the bottom). |
| `ErrorView` | 404 page for the catch-all route. |

## Pages (`src/pages/`)

Full-page route targets.

| Component | Description |
| --- | --- |
| `MainPage` | Home page. Hero ("Simplify the interface, amplify the experience") plus service cards, and composes `CompaniesSection`, `ExperienceSection`, `DiscoverSection`, `TestimonialsSection`, and `ImproveUx`. |
| `AboutPage` | Banner + profile image, bio, a 6-step design-process section (Discovery & Research → Handoff & Documentation), plus `ToolsSection` and `ImproveUx`. |
| `CaseStudiesPage` | Hero plus a grid of case studies (rendered with `CaseStudy` cards) and a nested `<router-view/>` for individual studies. Preloads case-study images. |
| `CaseStudyGenie` | "Genie" case study — a mobile app for preserving elders' stories (goal, audience, process, challenges). |
| `CaseStudyNavix` | "Navix Health CRM" case study — EHR form builder, problem/goals, low- and high-fidelity designs. |
| `CaseStudyItem` | Standalone case-study item page (route `/case-study-item`). |

## Sections (`src/sections/`)

Large reusable visual blocks composed by pages.

| Component | Description |
| --- | --- |
| `CompaniesSection` | Two opposing infinite-marquee rows of company logos; pauses on hover. |
| `ExperienceSection` | "Let's build something impactful" call-to-action with a "Hire Me!" button. |
| `DiscoverSection` | "Discover the products I've helped shape" — SaaS / Mobile / Websites category cards linking to case studies. |
| `TestimonialsSection` | A client testimonial (Justin Lu, Truckpedia) with a lazy-loaded profile image. |
| `ToolsSection` | Grid of design tools (Figma, Adobe XD, LottieFiles, Midjourney, Jira, Confluence, Trello, Monday.com, Illustrator, Miro). |
| `ImproveUx` | "Let's Talk UX" dark-background CTA prompting email contact. |

## Components (`src/components/`)

Small, reusable UI units.

| Component | Description | Props |
| --- | --- | --- |
| `NavigationElement` | Fixed header: logo, About / Case Studies links, "Download Resume" (uses `VITE_RESUME_LINK`), Contact button, and a mobile hamburger sidebar. | — |
| `FooterElement` | Footer with logo and copyright. | — |
| `LoadingElement` | Initial loading spinner shown by `MainView`. | — |
| `CaseStudy` | Case-study card: framed image + label + a `CaseStudyButton`. Image/container/text classes adapt to `type`. | `subPage` *(string, req)*, `label` *(string, req)*, `imageSource` *(string, req)*, `type` *(string, req — `'web'` \| `'mobile'`)* |
| `CaseStudyButton` | Router link rendered as `` `${to}/${caseStudy}` `` with a hover arrow translate. | `to` *(string, req)*, `label` *(string, req)*, `caseStudy` *(string, default `""`)* |
| `RouteLink` | Header nav link with a light-sweep hover animation and active styling. | `to` *(string, req)*, `label` *(string, req)*, `isActive` *(boolean, default `false`)* |
| `UnderConstruction` | Placeholder for case studies that aren't ready. | — |
| `EnvTest` | Debug component for verifying environment variables. | — |

## Animation directives in use

- `v-motion-*` (from `@vueuse/motion`) — e.g. `v-motion-slide-visible-once-left` / `-right` for entrance animations on case-study elements.
- `v-lazy` (from `vue-lazyload-next`) — deferred image loading (e.g. testimonial image).
