import express from 'express'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const port = 3000;

const server = express();
server.use(express.static('dist'));
server.use(express.static('assets'));

server.get('/', (req, res) => {
  console.dir(req, { depth: 0 });
  const initialMarkup = ReactDOMServer.renderToString(<App />);
  res.send(`
    <html>
      <head>
        <title>turkycat.com</title>
        <link rel="stylesheet" type="text/css" href="/styles.css">
      </head>
      <body>
        <div id="app-mount">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, () => {
  console.log(`Server running port: ${port}`);
});