import http, { Server } from 'http';
import app from './app';
import config from './config';

const { SERVER_PORT } = config;

const server = http.createServer(app);

const initServer = (port:string | number, server: Server) => {
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
};

initServer(SERVER_PORT, server);
