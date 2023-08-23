export const selectContacts = state => state.contact.contacts.items;
export const selectFilter = state => state.contact.filter;
export const selectIsLoading = state => state.contact.isLoading;
export const selectError = state => state.contact.contacts.error;
// export const selectIsLoggedIn = state => state.auth.isLogin;
// export const selectUserName = state => state.auth.user.name;
// export const selectUserEmail = state => state.auth.user.email;
// export const selectIsRefresh = state => state.auth.isRefresh;
