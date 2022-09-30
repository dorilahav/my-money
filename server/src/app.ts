import express from 'express';

export default () => {
  const port: number = parseInt(process.env.PORT as string) || 5000;
  const app = express();

  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => resolve(port));
    server.on('error', reject);
  });
};
