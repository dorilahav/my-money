import {AsyncRouter} from 'express-async-router';

import {getAll} from './account-controller';

const accountRouter = AsyncRouter();

accountRouter.get('/', getAll);

export default accountRouter;
