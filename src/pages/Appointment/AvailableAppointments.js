import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="py-20">
      <h1 className="text-2xl font-bold text-secondary text-center pb-10 lg:pb-20">
        Available appointment on {format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointments;
