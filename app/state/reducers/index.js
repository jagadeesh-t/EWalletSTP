import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import Navigator from '../../routes/index.routes';
import language from './language.reducer';
import user from './user.reducer';
import transactions from './transactions.reducer';
import transactionResult from './transactionResult.reducer';
import spinner from './spinner.reducer';

const nav = (state, action) => (
  Navigator.router.getStateForAction(action, state)
);

const appReducers = combineReducers({
  form: formReducer,
  nav,
  user,
  currentLanguage: language,
  transactions,
  transactionResult,
  spinner
  // add more reducers here
});

const rootReducer = (state, action) => appReducers(state, action);

export default rootReducer;
