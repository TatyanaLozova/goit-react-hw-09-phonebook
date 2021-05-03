
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
    filterContacts,
  
} from './contacts-actions';

const items = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactsSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactsSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
});

// только на Request ставим true

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true, 
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

export default combineReducers({ items, filter, loading});










