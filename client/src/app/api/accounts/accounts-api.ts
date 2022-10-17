import {AccountViewModel, NewAccountViewModel} from '@my-money/common';

import apiClient from '../api-client';

export const getAll = () => apiClient.get<AccountViewModel[]>('/accounts');

export const create = (newAccount: NewAccountViewModel) => apiClient.post<AccountViewModel, NewAccountViewModel>('/accounts', newAccount);
