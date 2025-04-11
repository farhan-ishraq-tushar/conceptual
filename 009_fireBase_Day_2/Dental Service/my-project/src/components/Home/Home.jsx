import React from "react";
import Banner from "../Banner/Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
  // accessing fetched data from router.jsx
  const services = useLoaderData();
  const {servicesData, feedBackData} = services;
  // console.log(services);
  console.log(servicesData);
  console.log(feedBackData);

  return (
    <>
      <Banner></Banner>
      <div className="justify-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4 w-11/12 gap-4">
          {
            servicesData.slice(0, 4).map((service) => (
              <ServiceCard service={service}></ServiceCard>
            ))
            // This will show eight card as there are eight set of data in "services.JSON"

            // "servicesData" indicate set of data that are accessed using "useLoaderData".

            // service={service} is sent as props in <ServiceCard></ServiceCard> component.Here, first service will act as the name of the object and the value of second service that is "{service}" will be added as the property of the object.
          }
        </div>

        <button className="btn btn-warning mb-4">
          <NavLink to="/all-treatments">Show More</NavLink>
        </button>
        
        <FeedBack feedBackData={feedBackData}></FeedBack>
      </div>
    </>
  );
};

export default Home;
