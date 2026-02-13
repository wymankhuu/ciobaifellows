# Architectural Patterns

## Data Layer: Two-Stage Enrichment

Fellow data uses a raw-then-override pattern rather than a single data source:

1. **Base records** — minimal identity fields (`rawFellows` array, `client/src/lib/fellows-data.ts:94-117`)
2. **Default enrichment** — generic bio/description applied via `.map()` (`fellows-data.ts:119-130`)
3. **Manual overrides** — presentation-specific data merged by ID match (`fellows-data.ts:133-391`)

This pattern keeps the base dataset small and allows selective enrichment per fellow without duplicating shared defaults. When adding a new fellow: add to `rawFellows`, then optionally add a `presentationFellows` entry for custom content.

## Component Composition: Card + Modal

Interactive entities follow a consistent card-to-modal drill-down pattern:

- **Card** (`client/src/components/fellow-card.tsx`) — summary view with avatar, name, role, school, quote
- **Modal** (`client/src/components/fellow-modal.tsx`) — full detail view with sidebar + main content layout
- **Page orchestration** (`client/src/pages/home.tsx:20-26`) — parent holds `selectedFellow` state and `modalOpen` boolean, passes `onClick` handler to cards

This pattern keeps cards stateless and modals controlled by the parent page.

## UI Component Library: shadcn/ui + Radix

All primitive UI components live in `client/src/components/ui/` and follow shadcn/ui conventions:

- Built on Radix UI primitives for accessibility
- Styled with `class-variance-authority` (CVA) for variant management
- Use the `cn()` utility (`client/src/lib/utils.ts:4-6`) to merge Tailwind classes
- Configured as "new-york" style variant (`components.json`)

When adding new UI primitives, use `npx shadcn-ui@latest add <component>` to maintain consistency.

## Styling: CSS Variable Theming

The design system uses HSL CSS variables defined in `client/src/index.css:35-66`:

- **Primary**: Navy (`220 30% 25%`) — headers, hero, footer backgrounds
- **Accent**: Muted teal (`180 30% 35%`) — interactive elements, highlights
- **Secondary**: Light beige (`40 30% 90%`) — card backgrounds, badges
- **Typography**: Playfair Display (serif) for headings, Inter (sans) for body — enforced via `@layer base` rules (`index.css:68-83`)

Colors are referenced as `hsl(var(--primary))` through Tailwind's theme system, enabling future dark mode support.

## Animation: Framer Motion for Interactions

Interactive feedback uses Framer Motion consistently:

- **Card hover** — `whileHover={{ y: -5 }}` with spring physics (`fellow-card.tsx:21-22`)
- **Page entrance** — `initial/animate` opacity+y fade-in on hero section (`home.tsx:55-58`)

Animation is used sparingly for micro-interactions, not page transitions.

## Section-Based Page Architecture

`home.tsx` is structured as a single-page scrolling layout with anchor-linked sections:

| Section | ID | Lines |
|---|---|---|
| Hero | (top) | `home.tsx:30-81` |
| Context | `#context` | `home.tsx:84-133` |
| Program | `#program` | `home.tsx:138-179` |
| Fellows | `#fellows` | `home.tsx:186-205` |
| About CIOB | `#about` | `home.tsx:208-284` |
| Footer | (bottom) | `home.tsx:288-301` |

Navigation links use `scroll-mt-24` for offset and `scroll-behavior: smooth` (set in CSS). New sections should follow the same `id` + `scroll-mt-24` pattern.

## Color-Cycling for Repeated Elements

Timeline cards and network cards use index-based color cycling:

- Timeline: `colorStyles[i % 4]` cycling orange/blue/emerald/purple (`home.tsx:149-160`)
- Networks: manually assigned orange (Consortium), blue (International), emerald (Outward Bound) (`home.tsx:256-283`)

## Asset Management: Static Imports

All images (photos, QR codes, logos) are statically imported from `attached_assets/` via the `@assets` Vite alias (`vite.config.ts:30`). This ensures:

- Assets are hashed and cache-busted in production builds
- Missing assets cause build-time errors rather than runtime 404s
- Import statements at top of `fellows-data.ts:1-41` and `home.tsx:11-17`

## Server Architecture: Express + Vite Dual-Mode

The server (`server/index.ts`) operates in two modes:

- **Development**: Vite dev server middleware for HMR (`server/index.ts:78-81`)
- **Production**: Static file serving from `dist/public/` (`server/index.ts:76-77`)

API routes are registered first to avoid conflicts with Vite's catch-all (`server/index.ts:73-75`). All API routes should use the `/api` prefix (`server/routes.ts:10`).

## Storage: Interface-First Design

The storage layer uses an interface (`IStorage` at `server/storage.ts:7-11`) with a concrete `MemStorage` implementation. This pattern allows swapping to a PostgreSQL-backed implementation (Drizzle ORM is configured in `shared/schema.ts` and `drizzle.config.ts`) without changing route handlers.

## Query Client: Static-Content Defaults

React Query is configured for static/rarely-changing content (`client/src/lib/queryClient.ts:44-57`):

- `staleTime: Infinity` — data never auto-refetches
- `refetchOnWindowFocus: false` — no background sync
- `retry: false` — no automatic retries

Currently all fellow data is client-side in `fellows-data.ts`. If data moves to the API, these defaults should be reconsidered.
