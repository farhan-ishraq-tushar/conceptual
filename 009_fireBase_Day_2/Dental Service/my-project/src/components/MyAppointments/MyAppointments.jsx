import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const MyAppointments = () => {
    const contextValue = useContext(authContext);
    console.log(contextValue)
    return (
        <div>
            My Appointments
        </div>
    );
};

export default MyAppointments;