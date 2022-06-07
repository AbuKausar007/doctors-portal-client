import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body justify-center ">
        <h2 className="card-title  text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className=" text-red-600 ">All slots are booked!</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} available.
        </p>
        <div className="card-actions justify-center pt-3">
          <label
            htmlFor="booking-modal"
            className="btn btn-secondary uppercase text-white"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
