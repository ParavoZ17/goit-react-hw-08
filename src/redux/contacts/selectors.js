
import { createSelector } from "@reduxjs/toolkit";


export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const filterName = (state) => state.filter.name;

export const filteredContacts = createSelector (
  [selectContacts, filterName],
  (contacts, contactsFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
  }
);