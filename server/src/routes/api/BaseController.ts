import {Model} from 'mongoose';
import {BaseViewModel} from '../../../../common';
import {IBaseModel} from './BaseModel';

export abstract class BaseEntityController<TModel extends IBaseModel, TViewModel extends BaseViewModel> {
  protected model: Model<TModel>;

  protected constructor(model: Model<TModel>) {
    this.model = model;
  }

  getAll: Server.GetRoute<TViewModel[]> = (req, res) =>
    this.model.find({})
      .then(x => x.map(this.mapToViewModel))
      .then(entities => {
        res.send(entities);
      });

  insert: Server.PostRoute<TViewModel, TViewModel> = async (req, res) => {
    const newEntity = this.mapToModel(req.body);

    const createdEntity = await newEntity.save();
    const entityViewModel = this.mapToViewModel(createdEntity);

    res.send(entityViewModel);
  }

  protected abstract mapToModel(viewModel: TViewModel): TModel;
  protected abstract mapToViewModel(model: TModel): TViewModel;
}