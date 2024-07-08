import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selector';

export const selectContacts = (state) => state.contacts.contacts;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectConfirmModal = (state) =>
  state.contacts.contacts.confirmModal;
export const selectCurrentContact = (state) =>
  state.contacts.contacts.currentContact;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const result = contacts.items.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(filter) ||
        contact.number.toLowerCase().includes(filter)
      );
    });

    return result;
  }
);