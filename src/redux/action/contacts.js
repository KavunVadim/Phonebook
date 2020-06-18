import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("ADD_CONTACT");
export const addContactRequest = createAction("ADD_CONTACT_REQUEST");
export const addContactSuccess = createAction("ADD_CONTACT_SUCCESS");
export const addContactError = createAction("ADD_CONTACT_ERROR");

export const deleteContact = createAction("DELETE_CONTACT");
export const deleteContactRequest = createAction("DELETE_CONTACT_REQUEST");
export const deleteContactSuccess = createAction("DELETE_CONTACT_SUCCESS");
export const deleteContactError = createAction("DELETE_CONTACT_ERROR");

export const getContacts = createAction("GET_CONTACT");
export const getContactsRequest = createAction("GET_CONTACT_REQUEST");
export const getContactsSuccess = createAction("GET_CONTACT_SUCCESS");
export const getContactsError = createAction("GET_CONTACT_ERROR");

export const resetError = createAction("RESET_ERROR");
