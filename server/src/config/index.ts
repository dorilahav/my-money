import 'dotenv/config';

import {configureExpress} from './ExpressConfig';

export const configure = (environment: string) =>
  configureExpress(environment);