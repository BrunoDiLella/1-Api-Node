import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import SwaggerUi from 'swagger-ui-express';
import swaggerFile from 'swagger.json';
import 'reflect-metadata';

import '@shared/container';
import { AppError } from '@shared/errors/appError';
import createConnection from '@shared/infra/typeorm';

import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3333, () => console.log('Server started!'));
