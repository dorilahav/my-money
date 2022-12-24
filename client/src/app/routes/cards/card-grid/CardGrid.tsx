import {EntityGrid} from '../../../components';
import {CardViewModel, Id} from '../../../view-models';
import {CardCard} from './CardCard';

interface CardGridProps {
  cards: CardViewModel[];
  onCreateClick: () => void;
  onEditClick: (cardId: Id) => void;
}

export const CardGrid = ({cards, onCreateClick, onEditClick}: CardGridProps) => (
  <EntityGrid entities={cards} entityComponent={CardCard} onCreateClick={onCreateClick} onEditClick={onEditClick} />
);
