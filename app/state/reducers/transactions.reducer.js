import {
UPDATE_TRANSACTION_HISTORY,
SET_TRANSACTION_HISTORY_GET_STATUS,
SET_TRANSACTION_HISTORY_TAB,
SET_TRANSACTION_HISTORY_FROM_DATE,
SET_TRANSACTION_HISTORY_TO_DATE,
SET_TRANSACTION_HISTORY_PAGE} from '../actions/index.actions';

const defaultState = {
  transactionList: [],
  transactionsRefreshing: false,
  currentTab: 'ALL',
  page: 1,
  fromDate: null,
  toDate: null
};

export default function transactions (state = defaultState, action) {
  switch (action.type) {
  case UPDATE_TRANSACTION_HISTORY: {
    return {...state, transactionList: action.payload};
  }
  case SET_TRANSACTION_HISTORY_GET_STATUS : {
    return {...state, transactionsRefreshing: action.payload};
  }
  case SET_TRANSACTION_HISTORY_TAB: {
    return {...state, currentTab: action.payload};
  }
  case SET_TRANSACTION_HISTORY_FROM_DATE: {
    return {...state, fromDate: action.payload};
  }
  case SET_TRANSACTION_HISTORY_TO_DATE: {
    return {...state, toDate: action.payload};
  }
  case SET_TRANSACTION_HISTORY_PAGE: {
    return {...state, page: action.payload};
  }
  default:
    return state;
  }
}
