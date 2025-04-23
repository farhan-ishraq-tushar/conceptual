import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Resister = () => {
  const { handleResister } = useContext(authContext);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    if(password.length<6){
        setError("Password must contain at least 6 characters")
    }
    if (password !== conPassword) {
      setError("Password didn't match");
      return;
    }
    if(!/[a-z]/.test(password)){
        setError("Password must contain at least one lowercase letter")
    }
    if(!/[A-Z]/.test(password)){
        setError("Password must contain at least one uppercase letter")
    }
    const email = e.target.email.value;
    console.log(name, image, password, conPassword, email);

    handleResister(email, password);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            type="text"
            placeholder="Error"
            className="input input-error"
            name="name"
          />
        </div>
        <br />
        <div>
          Image:{" "}
          <input
            type="text"
            placeholder="Error"
            className="input input-error"
            name="image"
          />
        </div>
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
        <div>
          Confirm Password:
          <input
            type="text"
            placeholder="Error"
            className="input input-error"
            name="conPassword"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Resister
        </button>
      </form>
      {error ? <p className="text-red-500">{error}</p> : ""}
      {/* if error is available show error  */}
      {/* Similar result 
      {error && <p className="text-red-500">{error}</p>} 
      */}
    </div>
  );
};

export default Resister;
