import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import Navigator from '../../routes/index.routes';
import language from './language.reducer';
import user from './user.reducer';

const nav = (state, action) => (
  Navigator.router.getStateForAction(action, state)
);

const appReducers = combineReducers({
  form: formReducer,
  nav,
  user,
  currentLanguage: language,
  // add more reducers here
});

const rootReducer = (state, action) => appReducers(state, action);

export default rootReducer;
