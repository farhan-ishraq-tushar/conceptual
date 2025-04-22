import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Login = () => {
    const { handleGoogleLogin, handleLogin} = useContext(authContext);
  // console.log(contextValue)

  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const image = e.target.image.value;
    const password = e.target.password.value;
    // const conPassword = e.target.conPassword.value;
    const email = e.target.email.value;
    console.log(password, email);

    handleLogin(email, password);
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
        </form>
      </div>
    </div>
  );
};

export default Login;
