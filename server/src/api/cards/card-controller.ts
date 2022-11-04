import {NewCardViewModel} from '@my-money/common';
import {RequestHandler} from 'express';
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
