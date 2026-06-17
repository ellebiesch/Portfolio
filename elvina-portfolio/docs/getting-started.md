# Getting Started

## Prerequisites

- **Node.js** 18+ (Vite 5 requires Node 18 or newer)
- **npm** (ships with Node)

## Install

From the `elvina-portfolio/` directory:

```bash
npm install
```

## npm scripts

Defined in [package.json](../package.json):

| Script | Command | Purpose |
| --- | --- | --- |
| `serve` | `vite` | Start the dev server (host `0.0.0.0`, port `5050`) |
| `build` | `vite build` | Produce a production build in `dist/` |
| `preview` | `vite preview` | Serve the production build locally |
| `lint` | `eslint --ext .js,.vue --ignore-path .gitignore --fix src` | Lint and auto-fix `src/` |
| `format` | `prettier . --write` | Format the whole project |

Run them with `npm run <script>`, e.g.:

```bash
npm run serve     # http://localhost:5050
npm run build
```

> Note: the dev script is `serve`, not `dev`.

## Environment variables

Vite exposes variables prefixed with `VITE_` to the client.

| Variable | Used for |
| --- | --- |
| `VITE_RESUME_LINK` | URL the "Download Resume" link in the navigation points to |

Create a `.env` file in `elvina-portfolio/`:

```
VITE_RESUME_LINK=https://your-resume-url
```

Access it in code via `import.meta.env.VITE_RESUME_LINK`.

## Dev server notes

- The server binds to `0.0.0.0:5050` (configured in [vite.config.js](../vite.config.js)), so it is reachable from other devices on the LAN.
- The router uses **history mode with a base of `/app`** (see [routing.md](routing.md)). Locally, navigate to the app's routes accordingly; SPA fallback for production is handled by [vercel.json](../vercel.json).
- The `@` import alias resolves to `src/` (configured in both `vite.config.js` and `jsconfig.json`).
