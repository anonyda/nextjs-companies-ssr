# Companies Website using Next.js
This project is an implementation of server-side rendering, displaying the company pages of Surfboard Ventures, Raw Engineering and Contentstack.\
Every page generates HTML on demand, and the data is fetched from a JSON file hosted on github.

The data and assets used in the application are fetched using `getStaticProps()`.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routing
Routes are created with Next.js' routing method, i.e. the endpoint `http://localhost:3000/raweng` is inside the `pages/raweng/index.js`.

## Deployment

The App is deployed on Vercel. The Production Build can be found the the environments on the right pane.
