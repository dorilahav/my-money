import {NewAccountViewModel} from '@my-money/common';
import {RequestHandler} from 'express';
import {Account} from '../../models';
import {convertToViewModel} from './account-converter';

export const getAll = async () => {
  const accounts = await Account.find().exec();

  return accounts.map(convertToViewModel);
};

export const create: RequestHandler<{}, {}, NewAccountViewModel> = async ({body: newViewModel}) => {
  const account = new Account({
    name: newViewModel.name
  });

  await account.save();

  return convertToViewModel(account);
};
