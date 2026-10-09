# Modern React Router Architecture

A React and Vite single-page application that demonstrates React Router data APIs in a product catalogue. It uses nested routes, loaders, route parameters, form actions, error boundaries, and a catch-all 404 route in one cohesive example.

## Features

- Nested layouts using `Outlet`
- A product list with query and category filtering
- Dynamic product routes using `:productId`
- Loader-based data fetching before a route renders
- Product detail tabs for overview, inventory, and reviews
- Review form actions with automatic route revalidation
- A loader-backed analytics route
- Route-level error boundaries and a wildcard 404 page
- A persistent application shell with navigation state

## Prerequisites

- Node.js 18 or later
- npm

## Getting started

```bash
npm install
npm run dev
```

Vite prints the local development URL, usually `http://localhost:5173`.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |

## Route map

| Route | Purpose |
| --- | --- |
| `/` | Home dashboard |
| `/products` | Product catalogue, loaded before rendering |
| `/products/:productId` | Product detail route using a dynamic URL parameter |
| `/products/:productId/inventory` | Nested inventory tab |
| `/products/:productId/reviews` | Nested reviews tab and review form action |
| `/analytics` | Analytics route loaded before rendering |
| `*` | Catch-all not-found page |

## Project structure

```text
src/main.jsx              Router definition, loaders, and review action
src/api/productsApi.js    In-memory product and analytics data access layer
src/data/mockData.js      Demo catalogue data
src/routes/               Route components, layouts, and error pages
src/index.css             Application styles
```

## How routing works here

The router is defined in `src/main.jsx` with `createBrowserRouter`. Parent routes provide the shared UI shell, and child routes render inside their parent `Outlet`. Loaders resolve data before their routes mount, so a product or analytics page receives its data at render time instead of fetching it after the UI appears.
