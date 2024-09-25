import express from 'express';
import path from 'node:path';
import bodyParser from 'body-parser';
import appRouter from './routes/app.router';
import sessionMiddleware from './middlewares/session.middleware';

const app = express();

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(sessionMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRouter);

export default app;
