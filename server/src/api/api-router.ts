import {AsyncRouter} from 'express-async-router';

import accountRouter from './accounts';
import cardsRouter from './cards';

const apiRouter = AsyncRouter();

apiRouter.use('/accounts', accountRouter);
apiRouter.use('/cards', cardsRouter);

export default apiRouter;
