import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    
    registerSuccess,
    registerError,
    loginSuccess,
    loginError,
    logoutSuccess,
    getCurrentUserSuccess,
    getCurrentUserError

} from './auth-actions'


const initialUserState = { name: null, email: null };


const user = createReducer(initialUserState, {
    [registerSuccess]: (_, {payload}) => payload.user,
    [loginSuccess]: (_, {payload}) => payload.user,
    [logoutSuccess]: () => initialUserState,
    [getCurrentUserSuccess]: (_, {payload}) => payload,
    
});

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]: () => null,
});

// const error = createReducer(null, {
//     [autActions.registerError]: (_, {payload}) => payload.error,
// });
 const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});
export default combineReducers({
    user,
    token,
    isAuthenticated,
});