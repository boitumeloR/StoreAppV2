import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import  Login  from '../pages/Login';

 const Routes = () => {
    return (
    <Router>
        <Scene key = "root">
            <Scene key = "login" component = { Login } title = "Login" initial = {true} hideNavBar = {true} />
        </Scene>
    </Router>
    );
 };

 export default Routes;
