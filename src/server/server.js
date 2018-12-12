import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import App from '../App.js';
import { getDevServerBundleUrl } from 'universal-hot-reload';
import webpackClientConfig from '../../webpack.config';

const PORT = 3000;
const app = Express();
const devServerBundleUrl = getDevServerBundleUrl(webpackClientConfig);

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
                      <link rel="stylesheet" href="/styles/style.css">
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <title>React Hooks - SSR and HMR</title>
                      </head>
                      <body>
                        <div id="app">${markup}</div>
                        <script type="application/javascript" src="${devServerBundleUrl}"></script>
                      </body>
                    </html>`;

  res.end(html);
});

// export httpServer object so universal-hot-reload can access it
export default app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}...`);
});