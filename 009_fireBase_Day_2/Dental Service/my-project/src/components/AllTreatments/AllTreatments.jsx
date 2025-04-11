import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatments = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div className="justify-items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4 w-11/12 gap-4">
        {services.map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllTreatments;
