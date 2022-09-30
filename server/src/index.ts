import 'dotenv/config';
import runApp from './app';

runApp()
  .then(port => console.log(`App running on port ${port}`))
  .catch(error => {
    console.error('An error occurred while trying to start the app:');
    console.error(error);
  });
