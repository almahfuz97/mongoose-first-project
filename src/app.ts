// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/users/user.routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandlers from './app/middlewares/globalErrorHandlers';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
// globalErrors
// app.use(globalErrorHandlers)

// not found
app.use(notFound)
export default app;
