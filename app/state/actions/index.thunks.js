import {NavigationActions} from 'react-navigation';

export const login = () => (dispatch) => {
  dispatch(NavigationActions.navigate({routeName: 'Home'}));
};

export const transfer = () => (dispatch) => {
  dispatch(NavigationActions.navigate({routeName: 'SendResult'}));
};
