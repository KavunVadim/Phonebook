import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "../action/filter";

export default createReducer("", {
  [filterContact]: (state, { payload }) => payload,
});
