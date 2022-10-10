import {Account} from '../../models';
import {convertToViewModel} from './account-converter';

export const getAll = async () => {
  const accounts = await Account.find().exec();

  return accounts.map(convertToViewModel);
};
