import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {handleGoogleLogin} = useContext(authContext)
    // console.log(contextValue)
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default Login;