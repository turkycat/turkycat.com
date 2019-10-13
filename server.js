const express = require('express')
const fs = require('fs');

const port = 3000;
const index = fs.readFileSync('index.html');
const style = fs.readFileSync('styles.css');

const server = express();

server.get('/', (req, res) => {
  console.dir(req, { depth: 0 });
  res.setHeader('Content-Type', 'text/html');
  res.send(index);
});

server.get('/styles.css', (req, res) => {
  console.dir(req, { depth: 0 });
  res.setHeader('Content-Type', 'text/css');
  res.send(style);
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, () => {
  console.log(`Server running port: ${port}`);
});