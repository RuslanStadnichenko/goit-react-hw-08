import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
  fetchContactsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
    currentContact: null,
    confirmModal: { state: false, id: null },
  },
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addCurrentContact(state, { payload }) {
      state.contacts.currentContact = payload;
    },
    openConfirmModal(state, { payload }) {
      state.contacts.confirmModal.state = true;
      state.contacts.confirmModal.id = payload;
    },
    closeConfirmModal(state) {
      state.contacts.confirmModal.state = false;
      state.contacts.confirmModal.id = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(editContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.map((x) => {
          return x.id === payload.id ? payload : x;
        });
        state.contacts.currentContact = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== payload
        );
      })

      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addCurrentContact, openConfirmModal, closeConfirmModal } =
  contactsSlice.actions;