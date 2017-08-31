import {createAction} from 'redux-actions';

// ==================
//  ACTION CONSTANTS
// ==================
// USER ACTIONS
export const POPULATE_USER = 'POPULATE_USER';

// TRANSACTION HISTORY actions
export const UPDATE_TRANSACTION_HISTORY = 'UPDATE_TRANSACTION_HISTORY';
export const SET_TRANSACTION_HISTORY_GET_STATUS = 'SET_TRANSACTION_HISTORY_GET_STATUS';
export const SET_TRANSACTION_HISTORY_TAB = 'SET_TRANSACTION_HISTORY_TAB';
export const SET_TRANSACTION_HISTORY_FROM_DATE = 'SET_TRANSACTION_HISTORY_FROM_DATE';
export const SET_TRANSACTION_HISTORY_TO_DATE = 'SET_TRANSACTION_HISTORY_TO_DATE';
export const SET_TRANSACTION_HISTORY_PAGE = 'SET_TRANSACTION_HISTORY_PAGE';

// TRANSFER actions
export const TRANSFER_RESULT = 'TRANSFER_RESULT';

// CLEAN REDUX STATE
export const CLEAN_APP_STATE = 'CLEAN_APP_STATE';

// LANGUAGE action constant
export const SET_LANGUAGE = 'SET_LANGUAGE';

// SPINNER action constants
export const SET_SPINNER_ACTIVE = 'SET_SPINNER_ACTIVE';
export const SET_SPINNER_INACTIVE = 'SET_SPINNER_INACTIVE';

// =================
//  ACTION CREATORS
// =================
// USER action creators
export const populateUser = createAction(POPULATE_USER);

// TRANSACTION HISTORY action creators
export const updateTransactionHistory = createAction(UPDATE_TRANSACTION_HISTORY);
export const setTransactionHistoryGetStatus = createAction(SET_TRANSACTION_HISTORY_GET_STATUS);
export const setTransactionHistoryCurrentTab = createAction(SET_TRANSACTION_HISTORY_TAB);
export const setTransactionHistoryFromDate = createAction(SET_TRANSACTION_HISTORY_FROM_DATE);
export const setTransactionHistoryToDate = createAction(SET_TRANSACTION_HISTORY_TO_DATE);
export const setTransactionHistoryPage = createAction(SET_TRANSACTION_HISTORY_PAGE);

// TRANSFER action creators
export const setTransferResult = createAction(TRANSFER_RESULT);

// LANGUAGE action creators
export const setLanguage = createAction(SET_LANGUAGE); // payload u send is langCode

// CLEAN REDUX STATE action creators
export const cleanAppState = createAction(CLEAN_APP_STATE);

// SPINNER action constants
export const showSpinner = createAction(SET_SPINNER_ACTIVE);
export const hideSpinner = createAction(SET_SPINNER_INACTIVE);
