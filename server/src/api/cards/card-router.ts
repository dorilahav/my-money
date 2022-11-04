import {AsyncRouter} from 'express-async-router';

import {create, getAll} from './card-controller';

const cardRouter = AsyncRouter();

cardRouter.get('/', getAll);
cardRouter.post('/', /* Add validation */ create);

export default cardRouter;
