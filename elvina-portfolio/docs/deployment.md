# Deployment

The app is a static Vue SPA built by Vite and hosted on **Vercel**.

## Build

```bash
npm run build      # outputs static assets to dist/
npm run preview    # locally serve the dist/ build to verify
```

The build produces a `dist/` directory of static files (HTML, JS, CSS, assets) suitable for any static host.

## Vercel SPA rewrite

[vercel.json](../vercel.json) rewrites every non-asset request to `index.html` so client-side routing works on deep links and refreshes:

```json
{
  "routes": [
    { "src": "/[^.]+", "dest": "/index.html", "status": 200 }
  ]
}
```

The `src` pattern `/[^.]+` matches paths without a dot (i.e. routes, not files with extensions), serving `index.html` with a `200` so Vue Router can resolve the route on the client.

> Because the router uses history mode with base `/app` (see [routing.md](routing.md)), confirm the deployed base path matches the configured router base if you change hosting setup.

## Analytics

[index.html](../index.html) includes a **Google Analytics (gtag)** snippet. Update or remove the measurement ID there if you fork or re-host the site.

## Environment variables on the host

Set `VITE_RESUME_LINK` in the host's environment settings (Vercel → Project → Settings → Environment Variables) so the navigation "Download Resume" link resolves in production. See [getting-started.md](getting-started.md#environment-variables).
