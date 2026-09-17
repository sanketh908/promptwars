# Election Awareness Platform

Understand elections. Simulate your vote. Get informed.

A friendly, fully client-side web app built for first-time and young voters. No backend, no login, no external accounts — everything runs in the browser.

Built for the **Google "Build with AI" hackathon (PromptWars x SDMC)**.

## Features

- **Election Journey** — an interactive, plain-language timeline of the six stages of an election (Nomination → Campaigning → Voter Registration → Polling Day → Counting → Results).
- **Voting Simulator** — a guided, four-step mock voting flow (registration check → polling booth → cast vote → results) with a live bar chart of your simulated tallies. One vote per browser, stored in `localStorage`; a reset button restarts the demo from scratch.
- **FAQ** — plain-language answers to the questions first-time voters ask most.

Everything is a simulation for educational purposes only and does not represent a real election.

## Tech stack

- Vite + React + TypeScript (strict mode, no `any`)
- Tailwind CSS v4
- Framer Motion for micro-interactions
- Recharts for the results chart (lazy-loaded, so it never blocks the initial page load)
- Vitest + Testing Library for the vote-casting/persistence logic

No database, no API routes, no environment variables, no external services.

## Development

```bash
npm install
npm run dev       # local dev server
npm run test      # run the test suite
npm run build     # production build (tsc -b && vite build)
npm run preview   # serve the production build locally
```

## Deployment

Static output in `dist/`, deployable anywhere. Via Vercel:

```bash
npx vercel --prod
```

Zero environment variables required.
