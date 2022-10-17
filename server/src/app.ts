import express, {json, urlencoded} from 'express';

import apiRouter from './api';

export default () => {
  const port: number = parseInt(process.env.PORT as string) || 5000;
  const app = express();

  app.use(json());
  app.use(urlencoded({extended: true}));

  app.use('/api', apiRouter);

  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => resolve(port));
    server.on('error', reject);
  });
};
