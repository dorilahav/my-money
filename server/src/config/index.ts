import 'dotenv/config';

import {configureExpress} from './ExpressConfig';
import {configureMongoose} from './MongooseConfig';

export const configure = (environment: string) =>
  configureMongoose()
    .then(() => configureExpress(environment));