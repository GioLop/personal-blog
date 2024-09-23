import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import appRouter from './routes/app.router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRouter);

export default app;
