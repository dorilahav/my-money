import {CardViewModel} from '@my-money/common';
import {EntityGrid} from '../../../components';

import {CardCard} from './CardCard';

interface CardGridProps {
  cards: CardViewModel[];
  onCreateClick: () => void;
}

export const CardGrid = ({cards, onCreateClick}: CardGridProps) => (
  <EntityGrid entities={cards} entityComponent={CardCard} onCreateClick={onCreateClick} />
);
