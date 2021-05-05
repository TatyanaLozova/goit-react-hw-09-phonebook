import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { authOperations } from '../../redux/auth';

// useState аналог handleChange и handleSubmit

  const styles = {
    form: {
      width: "200",
    }
  };

export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
       
        // eslint-disable-next-line no-template-curly-in-string
        console.warn("Тип поля name - ${name} не обрабатывается");
    }

  };

  const handleSubmit = e => {
    e.preventDefault();


    dispatch(authOperations.register({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");

  };

  return (
    <Form style={styles.form} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}

        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>

  );
}



// export class Registration extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.myRegister(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;
//     const { handleChange } = this
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>UserName</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             value={name}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={handleChange}

//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//   </Button>
//       </Form>

//     )
//   }
// }

// // сокращенная запись mapDispatchToProps (пример Репеты)
// const mapDispatchToProps = {
//   myRegister: authOperations.register,
// };
// // сокращенная запись аналог вот этотому
// // const mapDispatchToProps = (dispatch) => ({
// //  myProps: (data) => dispatch(authOperations.register(data)),
// // });

// export default connect(null, mapDispatchToProps)(Registration);