import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../App.js';

const PORT = 8080;
const app = Express();

app.use('/public', Express.static('public', { maxAge: '1d' }));

app.use("/styles", Express.static('build'));

app.use((req, res) => {

    const markup = renderToString(
      <StaticRouter location={req.url} context={{}}>
      <App />
      </StaticRouter>
    );
  const html = `<!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="utf-8">
                        <link rel="stylesheet" href="/styles/style.css">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <title>React Hooks - SSR and HMR</title>
                      </head>
                      <body>
                        <div id="app">${markup}</div>
                        <script type="application/javascript" src="bundle.js"></script>
                      </body>
                    </html>`;

  res.end(html);
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`Listening at Port : ${port}`);