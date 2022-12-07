import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import v1Router from '../../api/routes/v1';
import {
  internalErrorHandler,
  notFoundErrorHandler,
} from '../../api/middleware';
import session, { Store } from 'express-session';
import { SESSION_OPTIONS } from '../../config';

const origin = {
  origin: '*',
};

const setupExpress = (store: Store): Express => {
  const app = express();

  app.use(express.json());
  app.use(morgan('combined'));
  app.use(compression());
  app.use(cors(origin));
  app.use(helmet());

  app.use(session({ store, ...SESSION_OPTIONS }));

  app.use(v1Router);

  app.use(notFoundErrorHandler);
  app.use(internalErrorHandler);

  return app;
};

export default setupExpress;
