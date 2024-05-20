import { createSelector } from "@reduxjs/toolkit";
import {selectNameFilter} from "../filter/filterSelectors"


export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContactsState = (state) => state.contacts;
export const selectContacts = (state) => state.contacts.item;


export const selectVisibleContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) => {
      console.log("Calculating visible tasks. Now memoized!");
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(nameFilter.name.toLowerCase())
      );
    }
  );