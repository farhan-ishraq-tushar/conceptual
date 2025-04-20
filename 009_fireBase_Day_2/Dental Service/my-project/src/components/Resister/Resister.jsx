import React from "react";

const Resister = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        console.log(name, image, password, conPassword)
    }
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

        <button type="submit" className="btn btn-primary">Resister</button>
      </form>
    </div>
  );
};

export default Resister;
