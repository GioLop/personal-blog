import express from 'express';
import path from 'node:path';
import bodyParser from 'body-parser';
import appRouter from './routes/app.router';

const app = express();

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRouter);

export default app;
