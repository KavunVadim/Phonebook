import axios from "axios";

import {
  addContact,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContact,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContacts,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  resetError,
} from "../action/contacts";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const asyncAddContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  const newContact = { ...contact };
  try {
    dispatch(resetError());
    const { data } = await axios.post(
      "http://localhost:5050/contacts",
      newContact,
      options
    );
    dispatch(addContact(data));
  } catch (error) {
    dispatch(addContactError(error));
  } finally {
    dispatch(addContactSuccess());
  }
};

export const asyncDeleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    dispatch(resetError());
    await axios.delete(`http://localhost:5050/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  } finally {
    dispatch(deleteContactSuccess());
  }
};

export const asyncGetContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    dispatch(resetError());
    const { data } = await axios.get("http://localhost:5050/contacts");

    dispatch(getContacts(data));
  } catch (error) {
    dispatch(getContactsError(error));
  } finally {
    dispatch(getContactsSuccess());
  }
};
