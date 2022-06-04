import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

const Appointment = () => {
  return (
    <section
      className=" flex justify-center items-center lg:px-10 lg:mt-40 p-4 lg:p-0 my-5 lg:my-0"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1 hidden lg:block">
        <img src={doctor} className="mt-[-100px]" alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-primary font-bold text-2xl pb-5">Appointment</h1>
        <h2 className="text-white text-4xl font-bold pb-5">
          Make an Appointment Today
        </h2>
        <p className="text-white text-justify pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptate soluta quasi et quisquam illo dolores vero quos qui quam
          labore autem illum, obcaecati incidunt? Inventore eum molestiae sint
          minima, ea natus voluptates cumque exercitationem quasi, iure, maxime
          magnam error.
        </p>
        <button className="btn btn-primary  bg-gradient-to-r from-secondary to-primary text-white font-bold">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Appointment;
