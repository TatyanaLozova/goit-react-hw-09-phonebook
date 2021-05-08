import React, { useState,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import s from './ContactForm.module.css'

  
export default function ContactForm() {
  const dispatch = useDispatch();
    const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(contactsSelectors.getAllContacts);


    // записывает данные 
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
     
      switch (name) {
        case "name":
          setName(value);
          break;
        case "number":
          setNumber(value);
          break;
        default:
          console.warn(`Тип поля name - ${name} не обрабатывается`);
      }
    }, []);
     // отправляет данные 
    const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault();

      const uniqueContact = contacts.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      );
      if (uniqueContact) {
        alert(`${name} уже есть в списке ваших контактов`);
        return;
      }

      dispatch(contactsOperations.addContacts({ name, number }));
      resetForm();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, name, number],
  );

  // очищает форму после отправки
  const resetForm = () => {
    setName("");
    setNumber("");
  };
  
     
    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
            <input className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
                       
          />
        </label>
        <label className={s.label} >
          Number
          <input className={s.input}
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="000-00-00"
                      
          />
        </label>
        <button className={s.btnAdd} type="submit">
          Add contact
        </button>
                
      </form>
    
    );
  }
  
//      // записывает данные 
//     handleChange = e => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value });
//     };
//    // отправляет данные 
//   handleSubmit = (ev) => {
//     ev.preventDefault();
//     const { name } = this.state;
//     const { contacts } = this.props;

//     const uniqueContact = contacts.find(
//       (item) => item.name.toLowerCase() === name.toLowerCase()
//     );
//     if (uniqueContact) {
//       alert(`${name} уже есть в списке ваших контактов`);
//       return;
//     }

//     this.props.onSubmit(this.state);
//     this.resetForm();
//     };
//      // очищает форму после отправки
//   resetForm = () => {
//     this.setState({
//       name: "",
//       number: "",
//     });
//   };

//     render() {
//         const { name, number } = this.state;
//         return (
//             <form className={s.form} onSubmit={this.handleSubmit}>
//                 <label className={s.label}>
//                     Name
//                      <input className={s.input} 
//                      type="text"
//                         name="name"
//                         value={name}
//                 onChange={this.handleChange}
//                 placeholder="Name"
                       
//                     />
//                 </label>
//                 <label className={s.label} >
//                     Number
//           <input className={s.input}
//                         type="text"
//                         name="number"
//                         value={number}
//                         onChange={this.handleChange}
//                         placeholder="000-00-00"
                      
//                     />
//                 </label>
//                 <button className={s.btnAdd} type="submit">
//                     Add contact
//         </button>
                
//             </form>
            

//         )
//     }
// }
// const mapStateToProps = (state) => ({
//   contacts: contactsSelectors.getAllContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (contact) => dispatch(contactsOperations.addContacts(contact)),
// });
    
