import {configureZod} from '@my-money/common';
import 'dotenv/config';
import runApp from './app';
import connectDatabase from './database';

connectDatabase()
  .then(configureZod)
  .then(runApp)
  .then(port => console.log(`App running on port ${port}`))
  .catch(error => {
    console.error('An error occurred while trying to start the app:');
    console.error(error);
  });
