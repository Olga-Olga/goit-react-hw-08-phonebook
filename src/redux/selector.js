export const selectContacts = state => state.contact.contacts.items;
export const selectFilter = state => state.contact.filter;
export const selectIsLoading = state => state.contact.isLoading;
export const selectError = state => state.contact.contacts.error;
