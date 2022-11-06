import {AsyncRouter} from 'express-async-router';

import {create, deleteById, getAll, replaceById} from './card-controller';

const cardRouter = AsyncRouter();

cardRouter.get('/', getAll);
cardRouter.post('/', /* Add validation */ create);
cardRouter.delete('/:id', deleteById);
cardRouter.put('/:id', replaceById);

export default cardRouter;
