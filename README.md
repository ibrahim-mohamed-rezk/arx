# ARX Developments

ARX Developments — the official website of ARX Developments, a real-estate company. Browse projects and units, search on a map, estimate installments, and explore investment returns and leasing options.

**Live site:** https://www.arxeg.com

## Features

- **Project and unit browsing** — project listings with detail pages for individual projects and units (`src/app/[locale]/projects`, `projects/[id]`, `units/[id]`).
- **Search on a map** — map-based search alongside project listings (`SearchOnMap`, `MapSection`).
- **Installment calculator** — estimate payments before buying (`Calculator`, `InstallmentsCalculator`).
- **Investment returns** — investment and return sections (`Investment`, `InvestmentReturn`, `InvestNow`).
- **Leasing** — a leasing section and a lease-your-unit flow (`Leasing`, `LeaseYourUnit`).
- **Projects** — UNI, Kéntro, LOTERA, Bariq, O7, AURA, Miraj and La Vie.
- **Blog, FAQs, about and contact pages** (`blogs`, `fqas`, `about`, `contact`).
- **Bilingual Arabic/English** — localised routes under `src/app/[locale]`, with translations in `messages/` (via `next-intl`).
- **Light/dark theme** — theme switching via `ThemeProvider` (`src/components/ThemeProvider.tsx`).

## Tech Stack

- Next.js 15.2.4 (App Router) — `next`
- React 19.0.0 — `react`, `react-dom`
- TypeScript — `typescript`
- Tailwind CSS 4 — `tailwindcss`, `@tailwindcss/postcss`
- Internationalisation — `next-intl` 3.26.5
- State management — Redux Toolkit 2.6.1 (`@reduxjs/toolkit`, `react-redux`)
- Data fetching — Axios 1.7.9 (`src/libs/axios.ts`)
- UI — Swiper 11.2.5, `lucide-react`, `react-icons`, `react-phone-number-input`

> This repository contains the website frontend only; it loads its content from the project's backend API through Axios (`src/libs/axios.ts`).

## Project Structure

```
src/
  app/[locale]/   # Localised routes: home, about, blogs, contact, fqas, projects, units
  components/     # Shared components and home-page sections (calculator, map, leasing, ...)
  libs/           # API client (axios), Redux store, i18n helpers
  messages/       # Arabic and English translations
  types/          # Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js and npm

### Install and run

```bash
git clone https://github.com/ibrahim-mohamed-rezk/arx.git
cd arx
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Production build (next build)
npm start       # Start the production server (next start)
npm run lint    # Lint (next lint)
```
