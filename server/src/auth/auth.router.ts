import {AsyncRouter} from 'express-async-router';
import * as controller from './auth.controller';
import {userValidationSchema} from 'mymoney-common';
import {validateRequestBody} from '../middlewares';

export const authRouter = AsyncRouter();

authRouter.post('/login', validateRequestBody(userValidationSchema), controller.login);