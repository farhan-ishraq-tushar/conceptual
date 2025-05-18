import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyAppointments = () => {
  const contextValue = useContext(authContext);
  const { user } = useContext(authContext);
  console.log(contextValue);

  const [localSavedData, setLocalSavedData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("appointments");
    let saveData = [];
    if (localData) {
      saveData = JSON.parse(localData);
    }
    const userData = saveData.filter((data) => data.email === user?.email);
    console.log(userData);
  }, []);
  return <div>My Appointments</div>;
};

export default MyAppointments;
