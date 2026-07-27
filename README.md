# Astrono 

An astronomy web app built as my diploma project for the "Applied Programmer" track. Designed and built entirely solo over several months, from the initial idea through every API integration — covering stars and constellations, an interactive night sky map, moon phases and eclipses, and scientific lunar visualizations.

> The live demo is currently offline while some integrations are being fixed. The full source is available in this repo.

## About the project

Astrono is an informational web application for astronomy that lets users explore stars and constellations in depth. It was built for the diploma assignment: create a public-facing astronomy app with Home, Stars, Constellations, Star Navigator, Celestial Events, and Moon sections, plus an admin area for managing content and controlling user access — with a responsive, theme-appropriate design built on deliberately chosen technologies.

## Features

- Stars and constellations detail pages, pulling real imagery from NASA's image library
- Interactive map of the night sky
- Star navigator
- Moon phases and eclipse explanations
- Scientific lunar visualizations (gravity map, elevation map) built with 3D
- Upcoming celestial events, with admin create/update/delete
- Star chart generator
- Admin panel for managing content and section access
- English/Bulgarian translation toggle
- Responsive layout, back-to-top button

## Tech stack

**Backend**
- .NET 6 / ASP.NET Web API
- Entity Framework
- JWT authentication
- C#
- SQL Server

**Frontend**
- HTML / CSS / JavaScript
- Vite
- Three.js (3D lunar visualizations)
- UIkit

## Project structure

```
diploma-project-Astrono/
├── AstronoApi/            # ASP.NET Web API (controllers, program entry)
├── Services/               # Business logic, DTOs, mappers, contracts
├── Repositories/            # EF Core entities, DbContext, migrations
├── Frontend/               # Vite-based frontend
│   ├── logedPages/          # Pages for authenticated users
│   ├── notlogedPages/        # Public pages (home, moon, events, stars & constellations, about)
│   └── public/
└── DbBackupQuery.sql        # Database setup script
```

## Running locally

1. Open `DbBackupQuery.sql` in SQL Server and run the query to set up the database.
2. Open the `AstronoApi` folder in Visual Studio and run the API.
3. Open the `Frontend` folder in Visual Studio Code and launch it via `index.html`.

## Data sources & integrations

- [Interactive night sky map](https://slowe.github.io/VirtualSky/custom)
- [Star Navigator API](https://api-ninjas.com/api/stars)
- [Star chart generator](http://demo.astronomyapi.com/?#/star-chart)
- [NASA Image and Video Library](https://images.nasa.gov/) — star and constellation imagery
- [NASA — Stars basics](https://universe.nasa.gov/stars/basics/)
- [NASA Space Place — Constellations](https://spaceplace.nasa.gov/constellations/en/)
- [Astronomy.com — Learn the constellations](https://www.astronomy.com/observing/learn-the-constellations/)
- [NASA Science — Moon](https://science.nasa.gov/moon/)

## Why this project

This was my diploma project — a chance to take an idea for a full astronomy platform from scratch to a working, deployed product on my own: backend API design, database modeling, authentication, and a from-scratch frontend wired up to several external astronomy data sources. It went on to place in national competitions, including 2nd place at Blagoevgrad in March 2024.

## Author

Built by [tsvetinkv](https://github.com/tsvetinkv).
