

import { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
 import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import s from './ContactList.module.css'


export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLaodingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

   const onDeleteContact = (id) => {
    dispatch(contactsOperations.deleteContacts(id), []);
  };

  return (
    <>
      {isLaodingContacts && <h1 className={s.laoding}>Загружаем....</h1>}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li className={s.contact} key={id}>
            <p>{name}: </p>
            <p>{number}</p>
            <button className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
          </button>
          </li>
        ))}
      </ul>
    </>
  );
}




// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import { contactsOperations, contactsSelectors } from "../../redux/contacts";
// import s from './ContactList.module.css'

// class ContactList extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }
//   render() {
//     const { contacts, onDeleteContact, isLaodingContacts } = this.props;
//   return (
//     <>
//        {isLaodingContacts && <h1 className={s.laoding}>Загружаем....</h1>}
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <li className={s.contact} key={id}>
//               <p>{name}: </p>
//               <p>{number}</p>
//           <button className={s.btn}
//             type="button"
//             onClick={() => onDeleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//       </ul>
//       </>
//   );
// }
//     }

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const { getLoading, getVisibleContacts } = contactsSelectors;

// const mapStateToProps = (state) => ({
//   isLaodingContacts: getLoading(state),
//   contacts: getVisibleContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(contactsOperations.deleteContacts(id)),
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });
    
// export default connect(mapStateToProps,mapDispatchToProps) (ContactList);