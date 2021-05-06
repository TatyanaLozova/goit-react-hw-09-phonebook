import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { useSelector } from 'react-redux'
import {authSelectors} from '../../redux/auth';
import s from '../Navigation/Navigation.module.css'




export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)
    return (
        <nav> 
            <NavLink 
                to={routes.home}
                exact
                 className={s.link}
               
            >
                HOME
                </NavLink>
            {isLoggedIn && (
                <NavLink
                    to={routes.contacts}
                    exact
                     className={s.link}
                
                >
                   PHONEBOOK
                </NavLink>
            )}
        </nav>
    );
};



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import routes from '../../routes';
// import { connect } from 'react-redux'
// import {authSelectors} from '../../redux/auth';

// const style = {
//   link: {
//     display: "inline-block",
//     textDecoration: "none",
//     padding: 12,
//     fontWeight: 900,
//     color: "#ffffff",
//   },
//   activeLink: {
//       color: "red",
//   },
// };


// const Navigation = ({ isAuthenticated }) => {
//     return (
//         <nav>
//             <NavLink
//                 to={routes.home}
//                 exact
//                  style={style.link}
//                 activeStyle={style.activeLink}
//             >
//                 HOME
//                 </NavLink>
//             {isAuthenticated && (
//                 <NavLink
//                     to={routes.contacts}
//                     exact
//                      style={style.link}
//                 activeStyle={style.activeLink}
//                 >
//                    PHONEBOOK
//                 </NavLink>
//             )}
//         </nav>
//     );
// };
// const mapDispatchToProps = (state) => ({
//     isAuthenticated: authSelectors.getIsAuthenticated(state)
// })

// export default connect(mapDispatchToProps) (Navigation);
