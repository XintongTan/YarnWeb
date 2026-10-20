# KNIT

A minimal React website built with Vite, JavaScript (JSX), React Router, and plain CSS.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

You can also use `npm start` to launch the same development server.

```sh
npm run build
npm run preview
```

The build is written to `dist/`. Preview serves the production build locally.

This skeleton uses Vite 6 and React Router 6 to work with the workspace's installed Node.js 18.16.0.

## Structure

```text
src/
  components/  Shared header, footer, and layout
  pages/       Home, Pattern Studio, Tutorials, Yarn Library, Color Inspiration
  App.jsx      Route definitions
  main.jsx     React entry point and hash router
  styles.css   Shared responsive styles
```

Each page contains placeholder content. Navigation highlights the current page, and unknown URLs redirect to Home.

## GitHub Pages

Repository: https://github.com/XintongTan/YarnWeb

Website: https://xintongtan.github.io/YarnWeb/

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the website on pushes to `main`. In the repository's Settings > Pages, select **GitHub Actions** as the deployment source.

Vite's base path is `/YarnWeb/`. React Router uses hash URLs such as `/YarnWeb/#/tutorials` so direct links and refreshes work on GitHub Pages without server rewrites.
