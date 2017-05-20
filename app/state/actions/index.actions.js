import {createAction} from 'redux-actions';

// ==================
//  ACTION CONSTANTS
// ==================

// CLEAN REDUX STATE
export const CLEAN_APP_STATE = 'CLEAN_APP_STATE';

// LANGUAGE action constant
export const SET_LANGUAGE = 'SET_LANGUAGE';

// =================
//  ACTION CREATORS
// =================

// LANGUAGE action creators
export const setLanguage = createAction(SET_LANGUAGE);

// CLEAN REDUX STATE action creators
export const cleanAppState = createAction(CLEAN_APP_STATE);
