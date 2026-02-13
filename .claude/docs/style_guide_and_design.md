# Style Guide & Design System

## Color Palette

All colors are defined as HSL CSS variables in `client/src/index.css:35-66`.

| Role | Variable | HSL Value | Approximate Hex | Usage |
|---|---|---|---|---|
| Primary | `--primary` | `220 30% 25%` | Navy #2E3F5C | Hero, footer, headings, section titles |
| Primary fg | `--primary-foreground` | `40 20% 98%` | Cream #FDFAF5 | Text on primary backgrounds |
| Accent | `--accent` | `180 30% 35%` | Muted Teal #3E7373 | CTAs, highlights, border-left accents, links |
| Secondary | `--secondary` | `40 30% 90%` | Light Beige #EDE6D8 | Badges, card hover backgrounds |
| Background | `--background` | `40 20% 98%` | Soft Cream #FDFAF5 | Page background |
| Foreground | `--foreground` | `220 15% 20%` | Dark Slate #2C3340 | Body text |
| Muted fg | `--muted-foreground` | `220 10% 45%` | — | Descriptions, secondary text |

**Hardcoded overrides** (used sparingly):
- Page background: `bg-[#faf9f6]` (`home.tsx:29`)
- Modal background: `bg-[#fafafa]` (`fellow-modal.tsx:39`)
- Cover image navy: `bg-[#002044]` (`fellow-modal.tsx:112`)

### Network Color Assignments

Each school network has a consistent color identity used across timeline and network cards:

| Network | Color | Used in |
|---|---|---|
| Consortium | Orange (`orange-50/500/900`) | `home.tsx:258-263` |
| International | Blue (`blue-50/500/900`) | `home.tsx:267-272` |
| Outward Bound | Emerald (`emerald-50/500/900`) | `home.tsx:276-281` |
| (4th in cycle) | Purple (`purple-50/500`) | Timeline cards only (`home.tsx:153`) |

Timeline cards cycle through all four via `colorStyles[i % 4]` (`home.tsx:149-154`).

## Typography

Fonts are declared in `client/src/index.css:7-8` and loaded via Google Fonts in `client/index.html`.

| Font | CSS Variable | Usage |
|---|---|---|
| Playfair Display | `--font-serif` | All headings (h1-h6 via `@layer base` rule at `index.css:80-82`), fellow names, quotes, section numbers |
| Inter | `--font-sans` | Body text, descriptions, badges, UI elements |

### Type Scale (observed patterns)

| Element | Classes | Example |
|---|---|---|
| Hero title | `text-5xl md:text-7xl font-serif font-bold tracking-tight` | `home.tsx:73` |
| Section heading | `text-4xl font-serif font-bold text-primary` | `home.tsx:89, 140, 187, 210` |
| Card title | `text-xl font-serif text-primary` | `fellow-card.tsx:36` |
| Modal heading | `text-2xl font-serif font-bold text-primary` | `fellow-modal.tsx:51` |
| Modal subheading | `font-serif font-bold text-lg` | `fellow-modal.tsx:157, 170` |
| Body text | `text-lg text-muted-foreground font-light leading-relaxed` | `home.tsx:90`, `fellow-modal.tsx:141` |
| Description text | `text-sm text-muted-foreground leading-relaxed` | `fellow-modal.tsx:69, 159, 172` |
| Small text | `text-xs text-muted-foreground` | `fellow-card.tsx:58`, `home.tsx:170` |
| Label/overline | `text-xs font-bold uppercase tracking-widest` | `home.tsx:191`, `fellow-modal.tsx:68` |
| Quotes | `italic font-serif` + reduced opacity | `home.tsx:76`, `fellow-card.tsx:58`, `fellow-modal.tsx:102` |

### Key Typography Conventions

- **Headings** always use `font-serif font-bold text-primary`
- **Body/description** text uses `font-light` or default weight with `text-muted-foreground`
- **Quotes** use `italic font-serif` with reduced opacity (`opacity-80` or `text-foreground/80`)
- **Labels/overlines** use `text-xs font-bold uppercase tracking-widest text-accent`
- **Mission/callout** text uses `border-l-4 border-accent pl-4 italic font-medium` (`home.tsx:92`)

## Spacing & Layout

### Responsive Grid Breakpoints

Grids use Tailwind's default breakpoints (`md:768px`, `lg:1024px`, `xl:1280px`):

| Grid | Columns | Reference |
|---|---|---|
| Fellows grid | `1 → md:2 → lg:3 → xl:4` | `home.tsx:197` |
| Context section | `1 → lg:2` | `home.tsx:87` |
| Timeline | `1 → md:2 → lg:4` | `home.tsx:146` |
| Network cards | `1 → md:3` | `home.tsx:256` |
| Modal layout | Stacked → `md:grid-cols-[300px_1fr]` | `fellow-modal.tsx:40` |

### Section Spacing

- Container: `container mx-auto px-4`
- Section vertical padding: `py-12` to `py-24` (hero is largest)
- Section separators: `<Separator>` component or `border-b border-border/40`
- Between major sections: `mb-20`
- Scroll offset for anchored sections: `scroll-mt-24`

## Component Visual Patterns

### Cards

- Background: `bg-white/50 backdrop-blur-sm` (semi-transparent glass effect, `fellow-card.tsx:25`)
- Border: `border-none` on fellow cards; `border border-border/40` on content cards
- Shadow: `shadow-sm` default, `hover:shadow-md` or `hover:shadow-lg` on interact
- Radius: `rounded-xl` for cards and sections, `rounded-lg` for inner elements
- Transition: `transition-all duration-300` or `transition-shadow`

### Modals

- Size: `w-[95vw] md:max-w-4xl h-[90vh] md:h-[85vh]` (`fellow-modal.tsx:39`)
- Sidebar: `bg-primary/5` with `p-8`, `border-r border-border/50`
- Sections use icon-in-circle pattern: `p-2 rounded-full bg-{color}-100 text-{color}-700` (`fellow-modal.tsx:136-137, 154, 167`)
- Custom scrollbars: `scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`

### Avatars

| Context | Size | Border | Reference |
|---|---|---|---|
| Fellow card | `h-16 w-16` | `border-2 border-accent/20` | `fellow-card.tsx:29` |
| Modal sidebar | `h-32 w-32` | `border-4 border-background shadow-xl` | `fellow-modal.tsx:44` |
| Superintendent | `w-12 h-12` | `border border-black/10` | `home.tsx:245` |

Fallback: DiceBear initials API or `<AvatarFallback>` with `font-serif` initials.

### Buttons & Links

- Primary CTA: `bg-accent hover:bg-accent/90 text-white font-medium` (`fellow-modal.tsx:87`)
- Text links: `text-accent hover:text-accent/80 font-medium transition-colors` (`home.tsx:218`)
- Icon animation on hover: `group-hover:translate-x-1 transition-transform` (`fellow-modal.tsx:91`)

### Interactive Feedback

- Card lift: Framer Motion `whileHover={{ y: -5 }}` (`fellow-card.tsx:21`)
- Color shift: `group-hover:text-accent transition-colors` on card titles (`fellow-card.tsx:36`)
- Background shift: `group-hover:bg-secondary/70 transition-colors` on summary blocks (`fellow-card.tsx:51`)
- Scale: `group-hover:scale-105` on avatars (`fellow-card.tsx:29`)
- Nav dots: `opacity-0 group-hover:opacity-100` reveal pattern (`home.tsx:36`)

## Opacity Conventions

Opacity is used via Tailwind's `/` syntax for layered depth:

| Opacity | Usage |
|---|---|
| `/5` to `/10` | Subtle backgrounds (`bg-primary/5`, `border-border/50`) |
| `/20` to `/40` | Decorative elements (`bg-accent/20`, `text-accent/40`) |
| `/50` | Background tints (`bg-orange-50/50`, `bg-white/50`) |
| `/80` to `/90` | Slightly dimmed text (`text-primary-foreground/80`, `text-foreground/80`) |
| `opacity-60` to `opacity-80` | Footer text, quote text |

## Icon Usage

Icons are from Lucide React and follow a consistent sizing pattern:

| Context | Size | Reference |
|---|---|---|
| Section icon (in circle) | `w-5 h-5` or `w-6 h-6` | `home.tsx:99`, `fellow-modal.tsx:137` |
| Inline icon | `w-4 h-4` | `fellow-modal.tsx:58, 91` |
| Placeholder (large) | `w-20 h-20` | `fellow-modal.tsx:83` |

Icon circles: `p-2 rounded-full bg-{color}/10 text-{color}` for themed, or `p-3 bg-{color}-100/50 rounded-full` for network cards.
