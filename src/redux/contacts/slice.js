import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "./operations";

const initialState = { items: [], isLoading: false, error: null };
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Error";
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((c) => c.id !== payload);
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const idx = state.items.findIndex((c) => c.id === payload.id);
        if (idx !== -1) state.items[idx] = payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      }),
});
export default contactsSlice.reducer;