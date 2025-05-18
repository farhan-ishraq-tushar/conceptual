import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";
import { authContext } from "../AuthProvider/AuthProvider";

const Details = () => {
  //   const service = useLoaderData();
  //   console.log(service);
  const { cost, treatment, description, image } = useLoaderData();
  //   console.log(cost)
  const contextValue = useContext(authContext);
  console.log(contextValue);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} />
          <div>
            <h1 className="text-5xl font-bold">{treatment}</h1>
            <p className="pt-6">{description}</p>
            <h1 className="text-xl font-semibold mt-2">Cost: {cost}</h1>

            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-primary mt-3"
            >
              Book Appointment
            </button>
          </div>

          {/* modal component rendering */}
          <Modal treatment={treatment}></Modal>
        </div>
      </div>
    </div>
  );
};

export default Details;
