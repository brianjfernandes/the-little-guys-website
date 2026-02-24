# The Little Guys Website

## Commands
- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint on src/

## Tech Stack
- Next.js 16 (App Router, Turbopack)
- TypeScript (strict mode)
- Tailwind CSS v4
- ESLint with eslint-config-next

## Project Structure
```
src/
  app/
    layout.tsx        — Root layout (Header + Footer wrapper)
    page.tsx          — Home page
    globals.css       — Global styles (Tailwind import)
    about/page.tsx    — About page
    services/page.tsx — Services page
    contact/page.tsx  — Contact page
  components/
    Header.tsx        — Navigation bar
    Footer.tsx        — Footer with links and contact info
```

## Conventions
- Use `@/*` import alias for src/ directory
- Use Next.js `<Link>` for internal navigation (not `<a>`)
- All pages are server components by default
- Tailwind utility classes for styling (no separate CSS modules)
