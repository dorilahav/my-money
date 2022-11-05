import {NewCardViewModel} from '@my-money/common';
import {RequestHandler} from 'express';
import {EntityNotFoundError} from '../../errors';
import {Card} from '../../models';
import {convertToViewModel} from './card-converter';

export const getAll = async () => {
  const cards = await Card.find().exec();

  return cards.map(convertToViewModel);
};

export const create: RequestHandler<{}, {}, NewCardViewModel> = async ({body: newViewModel}) => {
  const card = new Card({
    label: newViewModel.label,
    type: newViewModel.type,
    chargingDate: newViewModel.chargingDate,
    linkedAccount: newViewModel.linkedAccount
  });

  await card.save();

  return convertToViewModel(card);
};

export const deleteById: RequestHandler<{id: string}> = async ({params: {id}}) => {
  const card = await Card.findById(id);

  if (!card) {
    throw new EntityNotFoundError(Card);
  }

  await card.delete();

  return convertToViewModel(card);
};
