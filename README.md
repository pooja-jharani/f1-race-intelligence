# Formula 1 Race Intelligence Dashboard

An interactive Formula 1 analytics project (2010-2026) built with Tableau and presented on a React web app.

## Live Links

- **Tableau Dashboard:** https://public.tableau.com/shared/QX5WYWDYR?:display_count=n&:origin=viz_share_link
- **Live Demo:** https://f1-race-intelligence-t9b7.vercel.app/

## Overview

This project explores 17 seasons of Formula 1 data to understand driver performance, team championship trends, tyre strategy, circuit participation, driver reliability and podium achievements. The dashboard and story are built in Tableau, published on Tableau Public, and embedded in a React web app hosted on Vercel.

**Intended users:** team strategists, race engineers, motorsport journalists and F1 fans.

## Key Numbers

| Metric | Value |
|---|---|
| Seasons | 17 (2010-2026) |
| Race outcome logs | 6,464 |
| Circuits | 29 |
| Competing constructors | 10 |

## Visualizations

- Global driver distribution across Grand Prix nations (map)
- Driver reliability and DNF analysis (stacked bar chart)
- Driver performance leaderboard (points)
- Team performance ranking
- Team championship performance analysis
- Tyre compound usage distribution (Soft, Medium, Hard, Intermediate)
- Country-wise race participation (treemap)
- Podium achievements by driver and team (bubble chart)

## Filters

- DNF Reason
- Year of Race Date
- Top N Parameter

## Use Cases

1. **Team performance strategist:** benchmarks team points against Red Bull Racing and Mercedes and studies how tyre compounds affect results.
2. **Broadcast analyst:** uses the driver leaderboard and podium distribution for pre-race and post-race content.
3. **Technical regulation analyst:** studies DNF patterns and driver reliability over 17 seasons.

## Tech Stack

- Tableau Desktop / Tableau Public
- React, Vite, TypeScript, Tailwind CSS
- GitHub (version control) and Vercel (hosting)

## Project Structure

```
f1-race-intelligence/
├── src/             (React components and app code)
├── public/          (static assets)
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .env.example
└── README.md
```

## How to Run Locally

1. Install [Node.js](https://nodejs.org) (version 18 or higher).
2. Clone this repository:
   ```
   git clone https://github.com/pooja-jharani/f1-race-intelligence.git
   cd f1-race-intelligence
   ```
3. Install dependencies:
   ```
   npm install --legacy-peer-deps
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open the local address shown in the terminal. An internet connection is needed to load the embedded Tableau dashboard.

## Dataset

https://1drv.ms/x/c/969d48f04dfd297c/IQBjirkj0T04R5ebZwKYulPPAXNIFD3e-v8BK3xVTWW27kg?e=irRaK9

## Publishing to Tableau Public

1. Open the workbook in Tableau Desktop.
2. Go to **File > Save to Tableau Public** and sign in.
3. Name the workbook and click **Save**.
4. Click **Share** on the published viz and copy the link or embed code.
5. Paste it into the dashboard section of the web app in `src/`.

## Deployment

The web app is deployed on Vercel and redeploys automatically on every push to the `main` branch.

## Future Scope

- Pit stop strategy analysis
- Lap time and sector breakdown
- Weather and safety car impact
- Championship outcome prediction

## Author

**Pooja Jharani**
B.Tech (Advanced AI), Medi-Caps University, Indore
GitHub: https://github.com/pooja-jharani
