import React, { useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import { authOperations } from '../../redux/auth';


export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleChange = ({ target: { name, value } }) => {
     switch (name) {
       case "email":
         setEmail(value);
         break;
       case "password":
         setPassword(value);
         break;
       default:
         console.error("Ошибка");
     }
  };
  
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.login({ email, password }));
    setEmail("");
    setPassword("");
  };
  
  return (
    <Form onSubmit={handleSubmit}>
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
  )
}
      
      
      
      

// export class Login extends Component {
//   state = {
//     email: '',
//     password: '',
//     };

//     handleChange = ({ target: { name, value } }) => {
//         this.setState({ [name]: value });
//     };
        
//     handleSubmit = e => {
//         e.preventDefault();
//          this.props.myLogin(this.state);
//         this.setState({ name: '', email: '', password: '' });
//     };

//     render() {
//         const { email, password } = this.state;
//         const {handleChange} = this
//     return (
//            <Form onSubmit={this.handleSubmit}>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     name="email"
//                     value={email}
//                     onChange={handleChange}
//                 />
//                 </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//                 <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     name="password"
//                     value={password}
//                     onChange={handleChange}

//                 />
//   </Form.Group>
 
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
    
//     )
//   }
// }
// // сокращенная запись mapDispatchToProps (пример Репеты)
// const mapDispatchToProps = {
//  myLogin: authOperations.login,
// };


// export default connect (null, mapDispatchToProps)(Login);