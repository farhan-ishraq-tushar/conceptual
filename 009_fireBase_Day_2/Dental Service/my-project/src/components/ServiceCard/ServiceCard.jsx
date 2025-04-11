import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log(service);

  //Service destructuring
  const { treatment, image, description, cost, id } = service;

  return (
    <div className="card bg-base-100 w-auto shadow-xl bg-gray-100">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body bg-gray-200">
        <h2 className="card-title">
          {treatment}
          <div className="badge badge-secondary">{cost} $</div>
        </h2>
        <p>{description.slice(0, 100)}...</p>
        {/*  slice(0,200) would include 0 to 200 character. */}

        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}>
            <button className="btn btn-secondary">Checkout More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
