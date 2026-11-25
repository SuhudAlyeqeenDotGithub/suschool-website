# SuSchool Public Website

The SuSchool public website is the marketing and product-information site for the wider SuSchool school-management platform. It introduces the platform, presents product and pricing information, and provides a static user-guide area. Account creation and sign-in happen in the separately hosted SuSchool application; this repository does not implement the application or its backend.

## Technology Stack

- Next.js `16.3.4` with the App Router
- React and React DOM `19.2.8`
- TypeScript `5.x`
- Tailwind CSS `4.x`, integrated through `@tailwindcss/postcss`
- `lucide-react` for icons used in documentation components
- ESLint `9.x` with the Next.js Core Web Vitals and TypeScript configurations
- npm, with the dependency tree locked in `package-lock.json` (lockfile version 3)

The root layout uses `next/font/google` for Plus Jakarta Sans. The homepage also imports Manrope and Inter from Google Fonts in its page styles.

## Project Structure

```text
suschool-website/
|-- public/                         # Logo, attendance screenshot, and image assets
|-- src/
|   |-- app/
|   |   |-- layout.tsx              # Shared HTML layout, font, and metadata
|   |   |-- page.tsx                # Homepage content and interactions
|   |   |-- globals.css             # Tailwind import and global design tokens/styles
|   |   `-- documentation/page.tsx  # /documentation route entry point
|   |-- components/documentation/   # Documentation shell, content, and reusable UI
|   `-- lib/
|       |-- siteUrls.ts             # Hosted app sign-in/sign-up URLs
|       `-- currency.ts             # Currency display formatting helper
|-- eslint.config.mjs
|-- next.config.ts
|-- postcss.config.mjs
|-- tsconfig.json
|-- package.json
`-- package-lock.json
```

`public/suschoollogo.png` and `public/attendanceoverview.png` are used on the site. The remaining SVGs in `public/` are present as assets but are not referenced by the current page source. The `@/*` TypeScript alias resolves to `src/*`.

## Prerequisites

- Node.js `20.9.0` or later, matching the engine requirement of the installed Next.js version.
- npm `9` or later to support the npm lockfile version used by this project.
- Network access when installing packages. Google Fonts access may also be needed when building because the root layout uses `next/font/google`.

## Installation and Setup

Run commands from this directory (`suschool-website/`):

```bash
npm ci
```

There are no application-specific environment variables or secret values required by the current source. No `.env` file is needed for local development. The website ignores `.env*` files in Git, but that ignore rule does not indicate that any variable is consumed.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Next.js may select another port if `3000` is already occupied.

The available quality command is:

```bash
npm run lint
```

There is no test or standalone type-check script in `package.json`.

## Build and Production

Create a production build and start the Next.js server:

```bash
npm run build
npm run start
```

`npm run start` expects a successful build to exist. The production server uses Next.js defaults; the project does not define a custom port, base path, rewrites, headers, image configuration, or static-export mode. Set any host-specific port or process configuration in the deployment environment, not in this README's commands.

## Website Architecture

### Routes and rendering

The App Router exposes two page routes:

- `/` renders the single-page marketing site. Its `page.tsx` is a client component because its navigation, FAQ accordion, and scroll-aware header use React state and browser events.
- `/documentation` renders the documentation interface. Its navigation selects documentation sections using local component state; the selected section does not get its own URL route.

`src/app/layout.tsx` supplies the shared document shell, language, title and description metadata, and Plus Jakarta Sans font. The current metadata is generic (`SuSchool` and `School management made simple.`).

### Content and components

The homepage's sections, feature list, FAQ entries, plan prices, and currency conversion figures are authored as data and JSX in `src/app/page.tsx`; there is no CMS or remote content source. The documentation page delegates to `src/components/documentation/page.tsx`, which owns the sidebar and active-section state. `pagesstructure.tsx` maps section IDs to content components; the accompanying files provide guides for administration, organisation, curriculum, staff, students, troubleshooting, and FAQs. Reusable documentation elements such as callouts, tables, step lists, and collapsible panels live in `reusablescomps.tsx`.

Some documentation components in the folder are standalone or draft content and are not currently connected to the active documentation page structure. Documentation text describes product workflows; it is not itself implementation of those workflows in this public-site repository.

Styling combines Tailwind utility classes, global CSS variables in `src/app/globals.css`, inline styles in documentation components, and a homepage-scoped style block. The root stylesheet defines the teal palette and light/dark token values; there is no theme provider or user-facing theme toggle in this website.

## Environment Variables

No environment variables are read by the application source. The hosted app URLs are constants in `src/lib/siteUrls.ts`, rather than environment-configurable settings. Do not put credentials or secrets in client-side code; if a future integration requires secrets, it should be implemented server-side and documented with its exact variable names and handling requirements.

## Integrations and External Services

- **SuSchool application:** Sign-in and sign-up controls navigate to `https://app.suschool.com/signin` and `https://app.suschool.com/verify-new-account` via constants in `src/lib/siteUrls.ts`.
- **Fonts:** The root layout loads Plus Jakarta Sans through `next/font/google`; homepage styles import Manrope and Inter from `fonts.googleapis.com`.
- **Contact links:** Email and telephone anchors open the configured mail client or dialer. They do not submit data to this website.
- **Contact form:** The homepage displays a form, but it has no `action`, submit handler, or API integration. It is not a functioning message-submission flow in the current implementation.

There are no application API routes, CMS, analytics SDK, payment gateway, or other backend service integrations in this repository. Marketing statements and documentation about platform features, billing, security, and availability are static website content and should be checked against the live SuSchool application before being treated as current product behavior. Some items are explicitly described in the site as planned, in development, or launching soon.

## Deployment Considerations

- Deploy as a Next.js application with Node.js `20.9.0` or later. The standard `build` and `start` scripts are available; no deployment-provider-specific configuration is committed here.
- This project does not configure static export. Use a host that supports running a Next.js production application unless deployment configuration is deliberately changed.
- Ensure the build environment can resolve the Google font used by `next/font/google`. The homepage also references Google Fonts directly, so browser access to those font resources affects that page's typography.
- App links are hard-coded to `app.suschool.com`. Changing the application domain requires updating `src/lib/siteUrls.ts`.
- Review static pricing, exchange-rate figures, contact details, and product copy for accuracy before publishing; these values are maintained in source rather than fetched from a service.

## Contributing

Keep public-site content and behavior within this repository. Changes to sign-in, account creation, data management, payments, or other authenticated product workflows belong to the separate SuSchool application/backend. Use the existing npm scripts and avoid documenting a feature or integration as live unless it is implemented and connected here.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
