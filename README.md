# Formula 1 Race Intelligence Dashboard

An interactive Formula 1 analytics project (2010-2026) built with Tableau and presented on an HTML web page.

## Live Links

- **Tableau Dashboard:** [ADD YOUR TABLEAU PUBLIC DASHBOARD LINK]
- **Tableau Story:** [ADD YOUR TABLEAU PUBLIC STORY LINK]
- - **Live Demo:** https://f1-race-intelligence-t9b7.vercel.app/

## Overview

This project explores 17 seasons of Formula 1 data to understand driver performance, team championship trends, tyre strategy, circuit participation, driver reliability and podium achievements. The dashboard and story are built in Tableau, published on Tableau Public, and embedded in an HTML page.

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
- HTML, CSS, JavaScript
- GitHub and GitHub Pages

## Project Structure

```
f1-race-intelligence/
├── index.html
├── README.md
├── static/          (CSS, JS, images)
├── data/            (dataset, CSV)
└── screenshots/     (dashboard images)
```

## How to Run Locally

1. Download or clone this repository.
2. Open `index.html` in any modern browser (Chrome, Edge or Safari).
3. An internet connection is needed to load the embedded Tableau dashboard.

## Dataset

[ADD DATASET NAME AND SOURCE LINK, e.g. Kaggle / Ergast / official F1 data]

## Screenshots

![Dashboard](screenshots/dashboard.png)
![Story](screenshots/story.png)

## Publishing to Tableau Public

1. Open the workbook in Tableau Desktop.
2. Go to **File > Save to Tableau Public** and sign in.
3. Name the workbook and click **Save**.
4. Copy the share link or embed code and add it to `index.html`.

## Future Scope

- Pit stop strategy analysis
- Lap time and sector breakdown
- Weather and safety car impact
- Championship outcome prediction

## Author

**Pooja Jharani**
B.Tech (Advanced AI), Medi-Caps University, Indore
GitHub: https://github.com/pooja-jharani
