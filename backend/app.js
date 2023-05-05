import * as http from 'http';
import { SERVER_PORT, HOSTNAME } from './constants/basic.js'

const createServer = () => {
  const hostname = HOSTNAME;
  const port = SERVER_PORT;
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  return server;
};

createServer();
