import express from 'express';
import path from 'path';
import {AuthRouter, ApiRouter} from '../routes';
import {authorize, handleError} from '../middlewares';

const configureMiddlewares = (app: express.Express) => {
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
}

const configureRoutes = (app: express.Express) => {
  app.use('/auth', AuthRouter());
  app.use('/api', authorize, ApiRouter());
}

const configureStaticFiles = (app: express.Express) => {
  const staticPath = path.resolve(__dirname, '..', '..', 'public');
  app.use(express.static(staticPath));

  app.get('*', (req, res) => {
    res.sendFile('index.html', {root: staticPath});
  });
}

const configureErrorHandler = (app: express.Express) => {
  app.use(handleError);
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