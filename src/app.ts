import express from 'express';
import path from 'node:path';
import bodyParser from 'body-parser';
import appRouter from './routes/app.router';
import sessionMiddleware from './middlewares/session.middleware';
import errorHandlerMiddleware from './middlewares/error-handler.middleware';

const app = express();

app.use(express.static(path.join(__dirname, '..','public')));

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(sessionMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRouter);

app.use(errorHandlerMiddleware);

export default app;
