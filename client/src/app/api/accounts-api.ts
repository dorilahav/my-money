import {AccountViewModel} from '@my-money/common';

import apiClient from './api-client';

export const getAll = () => apiClient.get<AccountViewModel[]>('/accounts');
