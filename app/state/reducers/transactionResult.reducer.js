import {TRANSFER_RESULT} from '../actions/index.actions';

const defaultState = {
  status: 'PENDING',
  amount: null,
  fee: null,
  totalAmount: null,
  transactionId: null,
  payeeName: null,
  payeePhone: null
};

export default function transactionResults (state = defaultState, action) {
  switch (action.type) {
  case TRANSFER_RESULT: {
    return action.payload;
  }
  default:
    return state;
  }
}
