import {configure} from './config';

const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

configure(environment)
  .then(port => {
    console.log(`Server has started on port ${port}!`);
  })
  .catch(error => {
    console.error('An error has occurred while trying to start the server!');
    console.error(error);
  })