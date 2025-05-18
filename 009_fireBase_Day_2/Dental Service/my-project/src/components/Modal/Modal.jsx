import { info } from "autoprefixer";
import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Modal = ({treatment}) => {

    const {user} = useContext(authContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e)
        const fname = e.target.Fname.value;
        const lname = e.target.Lname.value;
        const email = e.target.email.value;
         const tr = treatment;
         const info = {
          fname, lname, email:user?.email, tr
         }
         let saveData = [];
         const localData = localStorage.getItem('appointments');
         if(localData){
          saveData = JSON.parse(localData);
         }
         saveData.push(info);
         localStorage.setItem('appointments', JSON.stringify(saveData));
    }
  
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p> */}

          <form action="" onSubmit={handleSubmit}>
            <div>
              <div className="">
                First Name
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="Fname"
                />
              </div>

              <div className="">
                Last Name
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="Lname"
                />
              </div>

              <div className="">
                Email
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="email"
                />
              </div>

              <div className="">
                Phone Number
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="phone"
                />
              </div>

              <div className="">
                Date
                <input
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="date"
                />
              </div>

              <div className="">
                Address
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="address"
                />
              </div>

              <button className="btn btn-primary" type="submit">
                submit
              </button>
            </div>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-warning">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
