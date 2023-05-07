import {Grid} from '@mui/material';
import {BaseViewModel, Id} from '../../view-models';

import {PlusCardButton} from '../buttons';

export interface EntityComponentProps<T extends BaseViewModel> {
  entity: T;
  onEditClick?: () => void;
}

interface CreateEntityButtonProps {
  onClick: () => void;
}

interface EntityGridProps<T extends BaseViewModel> {
  entities: T[];
  entityComponent: (props: EntityComponentProps<T>) => JSX.Element;
  onCreateClick: () => void;
  createEntityButton?: (props: CreateEntityButtonProps) => JSX.Element;
  onEditClick?: (entityId: Id) => void;
  disableEdit?: (entity: T) => boolean;
}

export const EntityGrid = <T extends BaseViewModel>({
  entities,
  onCreateClick,
  entityComponent: EntityComponent,
  createEntityButton: CreateEntityButton = PlusCardButton,
  onEditClick,
  disableEdit
}: EntityGridProps<T>) => (
  <Grid container spacing={4}>
    {entities.map(entity => (
      <Grid key={entity.id} item xs={12} md={6} lg={3}>
        <EntityComponent
          entity={entity}
          onEditClick={onEditClick && !(disableEdit && disableEdit(entity)) ? () => onEditClick(entity.id) : undefined}
        />
      </Grid>
    ))}
    <Grid item xs={12} md={6} lg={3}>
      <CreateEntityButton onClick={onCreateClick} />
    </Grid>
  </Grid>
);
