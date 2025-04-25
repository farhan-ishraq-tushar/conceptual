import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {handleLogin, handleLogOut} = useContext(authContext);
    const [error, setError] = useState("")
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()
  // console.log(contextValue)

  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const image = e.target.image.value;
    const password = e.target.password.value;
    // const conPassword = e.target.conPassword.value;
    const email = e.target.email.value;
    // console.log(password, email);

    handleLogin(email, password)
    .then(res=>{
        navigate(location.state.form)
    })
    .catch(err=>{
        console.log(err.message)
        setError(err.message)
    })
  };
  return (
    <div>
      {/* <button onClick={handleGoogleLogin}>Google Login</button>
            <br />
            <NavLink to="/resister">Resister</NavLink> */}

      <div>
        <form action="" onSubmit={handleSubmit}>
          {/* <div>
            Name:{" "}
            <input
              type="text"
              placeholder="Error"
              className="input input-error"
              name="name"
            />
          </div> */}
          <br />
          {/* <div>
            Image:{" "}
            <input
              type="text"
              placeholder="Error"
              className="input input-error"
              name="image"
            />
          </div> */}
          <br />
          <div>
            Email:
            <input
              type="text"
              placeholder="Error"
              className="input input-error"
              name="email"
            />
          </div>
          <br />
          <div>
            Password:
            <input
              type="text"
              placeholder="Error"
              className="input input-error"
              name="password"
            />
          </div>
          <br />
          {/* <div>
            Confirm Password:
            <input
              type="text"
              placeholder="Error"
              className="input input-error"
              name="conPassword"
            />
          </div> */}

          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <button type="submit" onClick={handleLogOut} className="btn btn-secondary ml-2">Logout</button>
        </form>
        {error && <p className="text-red-500">{error.split("/")[1].slice()}</p>}
      </div>
    </div>
  );
};

export default Login;
