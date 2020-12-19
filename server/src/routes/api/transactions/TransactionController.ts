import {BaseEntityController} from '../BaseController';
import {TransactionViewModel} from '../../../../../common';
import {ITransaction, Transaction} from './Transaction';

export class TransactionController extends BaseEntityController<ITransaction, TransactionViewModel> {
  constructor() {
    super(Transaction);
  }

  protected mapToModel(viewModel: TransactionViewModel): ITransaction {
    return new Transaction({
      profileId: viewModel.profileId,
      amount: viewModel.amount
    });
  }

  protected mapToViewModel(model: ITransaction): TransactionViewModel {
    return {
      id: model._id!.toHexString(),
      profileId: model.profileId.toHexString(),
      creationDate: model.creationDate,
      amount: model.amount
    };
  }
}