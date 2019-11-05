import express from 'express'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const port = 3000;

const server = express();
server.use(express.static('dist'));
server.use(express.static('css'));

server.get('/', (req, res) => {
  console.dir(req, { depth: 0 });
  const initialMarkup = ReactDOMServer.renderToString(<App />);
  res.send(`
    <html>
      <head>
        <title>turkycat.com</title>
        <link rel="stylesheet" type="text/css" href="/materialize.css">
      </head>
      <body>
        <div id="root">${initialMarkup}</div>
        <script src="/main.js" ></script
        <script src="/materialize.js" ></script
      </body>
    </html>
  `)
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, () => {
  console.log(`Server running port: ${port}`);
});