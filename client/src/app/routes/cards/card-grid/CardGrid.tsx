import {Grid} from '@mui/material';
import {CardViewModel} from '@my-money/common';

import {PlusCardIcon} from '../../../components';
import {CardCard} from './CardCard';

interface CardGridProps {
  cards: CardViewModel[];
  onCreateClick: () => void;
}

export const CardGrid = ({cards, onCreateClick}: CardGridProps) => (
  <Grid container spacing={4}>
    {cards.map(card => (
      <Grid key={card.id} item xs={12} md={6} lg={3}>
        <CardCard card={card} />
      </Grid>
    ))}
    <Grid item xs={12} md={6} lg={3}>
      <PlusCardIcon onClick={onCreateClick} />
    </Grid>
  </Grid>
);
