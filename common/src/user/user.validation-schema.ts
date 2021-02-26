import yup from 'yup';
import {createValidationSchema} from '../common';
import {LoginUserViewModel} from './user.view-model';

// TODO: Rename to loginUserValidationSchema.
export const userValidationSchema = createValidationSchema<LoginUserViewModel>({
  username: yup.string().min(3, 'Username must be at least 3 letters long!').required('Username must be specified!'),
  password: yup.string().min(8, 'Password must be at least 8 letters long!').required('Password must be specified!')
}, {excludeBaseFields: true});