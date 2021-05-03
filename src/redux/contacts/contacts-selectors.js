import { createSelector } from "reselect";

const getLoading = (state) => state.contacts.loading;

const getAllContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;



// мемоизация
const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normFilter)
    );
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getLoading,
    getAllContacts,
    getFilter,
    getVisibleContacts
};
