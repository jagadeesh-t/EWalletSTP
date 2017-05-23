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

export const currencyFormatter = (unformatted) => (
  !unformatted && parseInt(unformatted) !== 0) ? '--' :  formatFieldAmount(unformatted);
