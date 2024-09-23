import http, { Server } from 'http';
import app from './app';

const SERVER_PORT = 8000;

const server = http.createServer(app);

const initServer = (port:number, server: Server) => {
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
};

initServer(SERVER_PORT, server);
