import result from 'lodash/result';
import filter from 'lodash/filter';
import {MainRoutes} from '../routes/index.routes';
import * as constants from '../config/constants.config';
import moment from 'moment';
// GENERAL utility methods
export const wrapObjectInFunction = (obj) => () => obj;

export const wrapMethodInFunction = (method, ...args) => () => method(...args);

export const getCurrentRouteName  = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

export const formatFieldAmount = (value) => {
  const replaceRegex = /(\d)(?=(\d{3})+(?!\d))/g;
  return (!value && parseInt(value) !== 0) ? '' :
        Number(value).toFixed(0).replace(replaceRegex, '$1,');
};

export const currencyFormatter = (unformatted) => {
  const formatted = formatFieldAmount(unformatted);
  return formatted === 'NaN' ? unformatted : formatted;
};

export const getErrorMessage = (response) => result(response, 'data.message', null);

export const getCurrentRouteTitle = (nav) => {
  const currentRouteName = result(nav, 'navigation.state.routeName');
  const routeConfig = MainRoutes[currentRouteName];
  return result(routeConfig, 'screenTitle', currentRouteName);
};

export const filterTransactionHistory = (transactionList = [], transactionHistoryType = null) => {
  // transactionHistoryType gets added in middleware utils
  if (!transactionHistoryType) {
    return transactionList;
  }
  return filter(transactionList, {transactionHistoryType});
};

export const formatTransactionHistoryListItem = (transactionHistoryItem) => {
  const getTransactionItemType = (transactionItem) => {
    switch (transactionItem.transactionHistoryType) {
    case constants.TH_CREDIT: return 'CREDIT';
    case constants.TH_DEBIT: return 'DEBIT';
    default: return 'ALL';
    }
  };
  return {
    metadata: transactionHistoryItem.metadata,
    amount: currencyFormatter(transactionHistoryItem.amount),
    type: getTransactionItemType(transactionHistoryItem),
    date: moment(transactionHistoryItem.date).format('Do MMM, h:mm a') // June 6th 2017, 8:14:05 am
  };
};
