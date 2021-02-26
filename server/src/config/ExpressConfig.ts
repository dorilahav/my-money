import express from 'express';
import path from 'path';
import {apiRouter} from '../api';
import {authRouter} from '../auth';

const configureMiddlewares = (app: express.Express) => {
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
}

const configureRoutes = (app: express.Express) => {
  // TODO: create /auth and /api routes.
  app.use('/api', apiRouter);
  app.use('/auth', authRouter);
}

const configureStaticFiles = (app: express.Express) => {
  const staticPath = path.resolve(__dirname, '..', '..', 'public');
  app.use(express.static(staticPath));

  app.get('*', (req, res) => {
    res.sendFile('index.html', {root: staticPath});
  });
}

const configureErrorHandler = (app: express.Express) => {
  // TODO: create errorHandler middleware
}

export const startServer = (app: express.Express, port: number) =>
  new Promise(resolve => {
    app.listen(port, () => {
      resolve(port);
    });
  });

export const configureExpress = (environment: string) => {
  const port = Number.parseInt(process.env.PORT ?? '3000');
  const app = express();

  configureMiddlewares(app);
  configureRoutes(app);

  if (environment === 'production') {
    configureStaticFiles(app);
  }

  configureErrorHandler(app);

  return startServer(app, port);
}