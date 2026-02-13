# CIOB AI Design Fellows

Showcase platform for the CIOB AI Design Fellows program — NYC Public School educators building AI-powered teaching tools via Playlab. Single-page app displaying fellow profiles, their apps, and program context for Consortium, International, and Outward Bound school networks.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript 5.6 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + CSS variables (HSL) |
| UI Components | shadcn/ui (new-york style) + Radix UI |
| Animation | Framer Motion |
| Routing | Wouter (lightweight client-side) |
| Icons | Lucide React |
| Server | Express 4 (serves API + static in production) |
| Database | Drizzle ORM + PostgreSQL (configured, not actively used) |
| State | TanStack React Query (configured for static content) |
| Validation | Zod |
| Deployment | Replit (static build to `dist/public/`) |

## Project Structure

```
client/src/
  components/
    ui/               # shadcn/ui primitives (30+ files) — do not edit manually
    fellow-card.tsx   # Fellow summary card
    fellow-modal.tsx  # Fellow detail modal (sidebar + main content)
  pages/
    home.tsx          # Main page — all sections (hero, context, program, fellows, about)
    not-found.tsx     # 404 page
  lib/
    fellows-data.ts   # Fellow interface, all fellow data, program context/rationale
    queryClient.ts    # React Query config + API fetch helpers
    utils.ts          # cn() class merge utility
  hooks/
    use-mobile.tsx    # Mobile breakpoint detection (768px)
  App.tsx             # Router + providers (QueryClient, Tooltip, Toaster)
  index.css           # Theme variables, fonts, base styles

server/
  index.ts            # Express setup, logging, dev/prod mode switching
  routes.ts           # API route registration (prefix: /api)
  storage.ts          # IStorage interface + MemStorage implementation
  static.ts           # Production static file serving

shared/
  schema.ts           # Drizzle ORM schema (users table) + Zod validation

attached_assets/      # ~88 images (fellow photos, QR codes, logos)
script/build.ts       # Two-stage build: Vite (client) + esbuild (server)
```

## Key Data File

All fellow data lives in `client/src/lib/fellows-data.ts`:
- `Fellow` interface: `fellows-data.ts:43-63`
- School category mapping: `fellows-data.ts:65-91`
- Raw fellows array: `fellows-data.ts:94-117`
- Presentation overrides: `fellows-data.ts:133-383`
- Program context/rationale/timeline exports: `fellows-data.ts:394-470`

To add a new fellow: add to `rawFellows` array, then optionally add a `presentationFellows` entry for custom content. Import any photos/QR codes from `attached_assets/` at the top of the file.

## Commands

```bash
npm run dev          # Start Express dev server (includes Vite HMR)
npm run dev:client   # Start Vite client only on port 5000
npm run build        # Full production build (client + server → dist/)
npm start            # Run production server from dist/index.cjs
npm run check        # TypeScript type checking
npm run db:push      # Push Drizzle schema to PostgreSQL
```

## Path Aliases (vite.config.ts:27-31)

| Alias | Resolves To |
|---|---|
| `@/` | `client/src/` |
| `@shared/` | `shared/` |
| `@assets/` | `attached_assets/` |

## Adding UI Components

Use the shadcn CLI to add new primitives — do not create them manually:
```bash
npx shadcn-ui@latest add <component>
```

## Additional Documentation

Check these files when working on related topics:

| Topic | File |
|---|---|
| Architectural patterns, design decisions, conventions | `.claude/docs/architectural_patterns.md` |
| Style guide: colors, typography, spacing, component visuals | `.claude/docs/style_guide_and_design.md` |
