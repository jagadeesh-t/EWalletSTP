import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {CLEAN_APP_STATE} from '../actions/index.actions';
import Navigator from '../../routes/index.routes';
import language from './language.reducer';

const nav = (state, action) => (
  Navigator.router.getStateForAction(action, state)
);

const appReducers = combineReducers({
  form: formReducer,
  nav,
  currentLanguage: language
  // add more reducers here
});

const rootReducer = (state, action) => {
  if (action.type === CLEAN_APP_STATE) {
    return appReducers({
      appInitKeys: state.appInitKeys,
      currentLanguage: state.currentLanguage,
      networkStatus: state.networkStatus
    }, action);
  }
  return appReducers(state, action);
};

export default rootReducer;
