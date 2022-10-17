import {AsyncRouter} from 'express-async-router';

import {create, getAll} from './account-controller';

const accountRouter = AsyncRouter();

accountRouter.get('/', getAll);
accountRouter.post('/', /* Add validation */ create);

export default accountRouter;
