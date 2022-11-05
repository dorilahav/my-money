import {AccountViewModel, Id, NewAccountViewModel} from '@my-money/common';

import apiClient from '../api-client';

export const getAll = () => apiClient.get<AccountViewModel[]>('/accounts');

export const create = (newAccount: NewAccountViewModel) => apiClient.post<AccountViewModel, NewAccountViewModel>('/accounts', newAccount);

export const deleteById = (id: Id) => apiClient.delete<AccountViewModel>(`/accounts/${id}`);
