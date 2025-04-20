import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const {handleGoogleLogin} = useContext(authContext)
    // console.log(contextValue)
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <br />
            <NavLink to="/resister">Resister</NavLink>
        </div>
    );
};

export default Login;