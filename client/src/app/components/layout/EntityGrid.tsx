import {Grid} from '@mui/material';
import {BaseViewModel} from '@my-money/common';

import {PlusCardButton} from '../buttons';

export interface EntityComponentProps<T extends BaseViewModel> {
  entity: T;
}

interface CreateEntityButtonProps {
  onClick: () => void;
}

interface EntityGridProps<T extends BaseViewModel> {
  entities: T[];
  entityComponent: (props: EntityComponentProps<T>) => JSX.Element;
  onCreateClick: () => void;
  createEntityButton?: (props: CreateEntityButtonProps) => JSX.Element;
}

export const EntityGrid = <T extends BaseViewModel>({
  entities,
  onCreateClick,
  entityComponent: EntityComponent,
  createEntityButton: CreateEntityButton = PlusCardButton
}: EntityGridProps<T>) => (
  <Grid container spacing={4}>
    {entities.map(entity => (
      <Grid key={entity.id} item xs={12} md={6} lg={3}>
        <EntityComponent entity={entity} />
      </Grid>
    ))}
    <Grid item xs={12} md={6} lg={3}>
      <CreateEntityButton onClick={onCreateClick} />
    </Grid>
  </Grid>
);