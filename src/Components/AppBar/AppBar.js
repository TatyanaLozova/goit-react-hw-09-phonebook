import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { connect } from 'react-redux'
import {authSelectors} from '../../redux/auth'


const style = {
    blok: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 60,
        backgroundColor: "rgb(40, 215, 238, 0.384)",
        borderBottom: "1px solid",
         width: "100%",


    },
};
     

const AppBar = ({isAuthenticated}) => (
    <header  style={style.blok}>
        <Navigation />
       {isAuthenticated ? <UserMenu /> : <AuthNav />}
   </header>
);
    
const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
    
});


export default connect(mapStateToProps)(AppBar);
