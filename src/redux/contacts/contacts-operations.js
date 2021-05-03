

import axios from "axios";
import {
   fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
} from "./contacts-actions";

// axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
   // axios
  //   .get("/contacts")
  //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //   .catch((error) => dispatch(fetchContactsError(error)));
};



// const addContacts = ({ name, number }) => async (dispatch) => {
//   const contact = {
//     name,
//     number,
//   };
const addContacts = contact => async (dispatch) => {
  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error));
  }
   // axios
  //   .post("/contacts", contact)
  //   .then(({ data }) => dispatch(addContactSuccess(data)))
  //   .catch((error) => dispatch(addContactError(error)));
};

 
  const deleteContacts = (contactId) => async (dispatch) => {
    dispatch(deleteContactsRequest());

    try {
      await axios.delete(`/contacts/${contactId}`);
      dispatch(deleteContactsSuccess(contactId));
    } catch (error) {
      dispatch(deleteContactsError(error.message));
    }
    // axios
  //   .delete(`/contacts/${contactId}`)
  //   .then(() => dispatch(deleteContactSuccess(contactId)))
  //   .catch((error) => dispatch(deleteContactError(error)));
  };

 
  // eslint-disable-next-line import/no-anonymous-default-export
  export default { fetchContacts, addContacts, deleteContacts };