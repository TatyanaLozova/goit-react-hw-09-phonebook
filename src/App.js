import React, { Component, lazy, Suspense } from "react";
import {  Switch } from 'react-router-dom';
import './App.css';
import AppBar from "./Components/AppBar/AppBar";
import { PrivateRoute } from './Components/PrivateRoute';
import { PublicRoute } from './Components/PublicRoute';
// import HomeView from "./views/HomeView";
// import RegistrationView from "./views/RegistrationView";
// import LoginView from "./views/LoginView";
// import ContactsView from "./views/ContactsView";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {authOperations} from "./redux/auth";
import { connect } from "react-redux";



const HomeView = lazy(() =>
  import("./views/HomeView.js" /* webpackChunkName: "home-view" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView.js" /* webpackChunkName: "contacts-view" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView.js" /* webpackChunkName: "login-view" */)
);
const RegistrationView = lazy(() =>
  import(
    "./views/RegistrationView.js" /* webpackChunkName: "registration-view" */
  )
);


class App extends Component {
     componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<p>Loading</p>}>
      <Switch>
         <PublicRoute exact path="/" component={HomeView} />
           <PrivateRoute path="/contacts" redirectTo="/login" component={ContactsView}/>
         <PublicRoute path="/register" restricted redirectTo="/contacts" component={RegistrationView} />
        <PublicRoute path="/login" restricted redirectTo="/contacts"component={LoginView} />
        </Switch>
        </Suspense>
    </div>
    )
  }
}

  const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps) (App);




