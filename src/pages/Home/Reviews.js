import React from "react";

const Reviews = ({ review }) => {
  return (
    <div className="card lg:max-w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.description}</p>
        <div className="flex items-center pt-5">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div className="">
            <h1 className="text-xl text-gray-500 font-bold ">{review.name}</h1>
            <h3>{review.location}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
