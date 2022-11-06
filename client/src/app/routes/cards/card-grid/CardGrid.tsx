import {CardViewModel, Id} from '@my-money/common';
import {EntityGrid} from '../../../components';

import {CardCard} from './CardCard';

interface CardGridProps {
  cards: CardViewModel[];
  onCreateClick: () => void;
  onEditClick: (cardId: Id) => void;
}

export const CardGrid = ({cards, onCreateClick, onEditClick}: CardGridProps) => (
  <EntityGrid entities={cards} entityComponent={CardCard} onCreateClick={onCreateClick} onEditClick={onEditClick} />
);
