import 'reflect-metadata';
import express, { json } from 'express';
import 'express-async-errors';

import '../typeorm/connectionDB';
import '@shared/container/intex';

import routes from './routes';

import middlewareError from '@shared/infra/http/middlewares/error';
import rateLimiter from '@shared/infra/http/middlewares/lateLimiter';

const server = express();

server.use(rateLimiter);
server.use(json());
server.use(routes);
server.use(middlewareError);

server.listen(3333, () => console.log('🚀 Server started on port 3333'));
