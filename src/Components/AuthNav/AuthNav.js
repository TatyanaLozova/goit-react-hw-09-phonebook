import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'
import s from '../Navigation/Navigation.module.css'



const AuthNav = () => {
    return (
        <nav>
            <NavLink
                to={routes.registration}
                exact
               className={s.form}
                            >
                REGISTRATION
                </NavLink>
            <NavLink
                to={routes.login}
                exact
                 className={s.form}
                            >
                LOGIN
            </NavLink>
            
        </nav>
    );
};

export default AuthNav;
