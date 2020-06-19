import { createReducer } from "@reduxjs/toolkit";

import {
  addContactError,
  deleteContactError,
  getContactsError,
  resetError,
} from "../action/contacts";

export default createReducer(false, {
  [addContactError]: () => true,
  [getContactsError]: () => true,
  [deleteContactError]: () => true,
  [resetError]: () => false,
});
