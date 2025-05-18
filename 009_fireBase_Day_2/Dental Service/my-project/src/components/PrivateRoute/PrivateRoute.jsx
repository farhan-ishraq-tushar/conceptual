import React, { Children, useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import Details from '../Details/Details';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(authContext)
    const location = useLocation()
    console.log(location);
    if(loading){ // true
        return <h1>Loading.........</h1>
    }
    if(!user){ // null
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
     return children;
   
};

export default PrivateRoute;