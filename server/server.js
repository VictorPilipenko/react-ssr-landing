import fs from 'fs'
import path from 'path'
import React from 'react'
import compression from 'compression'
import express from 'express'
import Helmet from "react-helmet"
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import App from '../src/App'

const PORT = 4000
const app = express()
const router = express.Router()
const sheet = new ServerStyleSheet()

app.disable("x-powered-by")
app.use(compression())

const serverRenderer = (req, res, next) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </StyleSheetManager>
  );

  const helmet = Helmet.renderStatic()
  const styleTags = sheet.getStyleTags()
  const indexFile = path.resolve('./build/index.html');

  if (context.url) {
    res.redirect(context.url)
  } else if (!fs.existsSync(indexFile)) {
    next("Site is updating... please reload page in a few minutes.")
  } else {
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }

      return res.send(
        data
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        .replace("</head>", `${helmet.meta.toString()}</head>`)
        .replace("</head>", `${helmet.title.toString()}</head>`)
        .replace("</head>", `${helmet.script.toString()}</head>`)
        .replace("</head>", `${styleTags}</head>`)
      );
    });
  }
}

router.get("/", serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'))
)

router.get("*", serverRenderer)

app.use(router)

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})

