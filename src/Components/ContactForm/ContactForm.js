import React, { useState } from 'react'
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import s from './ContactForm.module.css'

  
  export default function ContactForm() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    // записывает данные 
    const handleChange = e => {
        const { name, value } = e.target;
       ({ [name]: value });
    };
     
    return (
      <form className={s.form} onSubmit={ }>
        <label className={s.label}>
          Name
            <input className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={}
            placeholder="Name"
                       
          />
        </label>
        <label className={s.label} >
          Number
          <input className={s.input}
            type="text"
            name="number"
            value={number}
            onChange={}
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
    
// export default connect(mapStateToProps,mapDispatchToProps) (ContactForm);