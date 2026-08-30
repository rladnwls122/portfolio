# [My-portfolio](https://portfolio-aw8bttvhn-rladnwls122s-projects.vercel.app/)
Next.js 16 · React 19 · TypeScript · Tailwind CSS v4. Static — deploys to Vercel with no configuration.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

| What | File |
|---|---|
| Every string, project, diagram and timeline entry | `lib/content.ts` |
| Design tokens, theme, shared classes | `app/globals.css` |
| Page layout | `app/page.tsx` |
| Header, theme and language switches, scroll reveal | `components/Chrome.tsx` |
| Mermaid rendering and the full-screen viewer | `components/Diagram.tsx` |
| Images | `public/img/` |

## Language and theme

Both languages ship in the HTML; CSS hides the inactive one, so switching costs no re-render and no request. Write copy as `{ ko, en }` pairs and render it with `<T v={...} />`.

Theme is a `data-theme` attribute on `<body>`. An inline script in `app/layout.tsx` applies the stored choice before first paint.

## Diagrams

Sources are Mermaid strings in `lib/content.ts`, following the conventions in the guidebook's style reference:

- Line breaks inside labels use `<br/>`, never `\n`.
- Service nodes carry icons: `EKS@{ icon: "logos:aws-eks", form: "square", label: "…", pos: "b", h: 46, w: 46 }`.
- Icon-shaped nodes are declared on their own line; edges reference them by id.
- Route tables, gateways and other routing constructs stay plain.

Icons come from `lib/mermaid-icons.json`, which holds only the icons in use — the full Iconify packs are about 5 MB. After adding an icon name to `scripts/build-icons.mjs`:

```bash
npm run icons
```

Add a color brand mark by dropping the SVG in `assets/` and listing it under `localFiles`.
