import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'

const style = {
  form: {
    display: "blok",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#ffffff",
  },
  activeLink: {
     color: "red",
  },
};


const AuthNav = () => {
    return (
        <nav>
            <NavLink
                to={routes.registration}
                exact
                style={style.form}
                activeStyle={style.activeLink}
            >
                REGISTRATION
                </NavLink>
            <NavLink
                to={routes.login}
                exact
                 style={style.form}
                activeStyle={style.activeLink}
            >
                LOGIN
            </NavLink>
            
        </nav>
    );
};

export default AuthNav;
