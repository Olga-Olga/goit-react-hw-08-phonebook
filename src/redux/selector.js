export const selectContacts = state => state.contact.contacts.items;
export const selectFilter = state => state.contact.filter;
export const selectIsLoading = state => state.contacts.contact.isLoading;
export const selectError = state => state.contact.contacts.error;
