import {createAction} from 'redux-actions';

// ==================
//  ACTION CONSTANTS
// ==================
// USER ACTIONS
export const POPULATE_USER = 'POPULATE_USER';
// CLEAN REDUX STATE
export const CLEAN_APP_STATE = 'CLEAN_APP_STATE';

// LANGUAGE action constant
export const SET_LANGUAGE = 'SET_LANGUAGE';

// =================
//  ACTION CREATORS
// =================
// USER action creators
export const populateUser = createAction(POPULATE_USER);
// LANGUAGE action creators
export const setLanguage = createAction(SET_LANGUAGE); // payload u send is langCode

// CLEAN REDUX STATE action creators
export const cleanAppState = createAction(CLEAN_APP_STATE);
