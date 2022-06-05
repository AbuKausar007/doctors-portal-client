import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body justify-center ">
        <h2 class="card-title  text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className=" text-red-600 ">All slots are booked!</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available.
        </p>
        <div class="card-actions justify-center pt-3">
          <button class="btn btn-secondary uppercase text-white">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
