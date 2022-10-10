import {AsyncRouter} from 'express-async-router';

import accountRouter from './accounts';

const apiRouter = AsyncRouter();

apiRouter.use('/accounts', accountRouter);

export default apiRouter;
