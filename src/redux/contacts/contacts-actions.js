
import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
export const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
export const fetchContactsError = createAction("contacts/fetchContactsError");


export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSuccess = createAction('contacts/addContactsSuccess');
export const addContactsError = createAction('contacts/addContactsError');


export const deleteContactsRequest = createAction('contacts/deleteContactsRequest');
export const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess');
export const deleteContactsError = createAction('contacts/deleteContactsError');

export const filterContacts = createAction('contacts/filterContacts');



