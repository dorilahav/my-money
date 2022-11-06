import {CardEditsViewModel, CardViewModel, Id, NewCardViewModel} from '@my-money/common';

import apiClient from '../api-client';

export const getAll = () => apiClient.get<CardViewModel[]>('/cards');

export const create = (newCard: NewCardViewModel) => apiClient.post<CardViewModel, NewCardViewModel>('/cards', newCard);

export const deleteById = (id: Id) => apiClient.delete<CardViewModel>(`/cards/${id}`);

export const editCard = (id: Id, cardEdits: CardEditsViewModel) => apiClient.put<CardViewModel, CardEditsViewModel>(`/cards/${id}`, cardEdits);
