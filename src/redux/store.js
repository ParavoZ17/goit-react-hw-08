
import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";


export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filtersSlice,
  },     
});


