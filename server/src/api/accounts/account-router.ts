import {AsyncRouter} from 'express-async-router';

import {create, deleteById, getAll} from './account-controller';

const accountRouter = AsyncRouter();

accountRouter.get('/', getAll);
accountRouter.post('/', /* Add validation */ create);
accountRouter.delete('/:id', deleteById);

export default accountRouter;
