import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  console.log(user);
  return (
    <div className="min-h-20 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-around text-gray-800">
      <NavLink to="/" className="text-xl font-semibold logo">
        TEETH WIZARD
      </NavLink>
      <div className="space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all-treatments">All Treatments</NavLink>
        <NavLink to="/my-appointments">My appointments</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        {user?.email ? (
          <div> 
            <img src={user.photoURL}/>
            <button onClick={handleLogout} className="btn btn-neutral">logout</button>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn btn-primary">Login</button>
          </NavLink>
        )}
        <NavLink to="/resister">
          <button className="btn btn-secondary ml-2">Resister</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
