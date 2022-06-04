import React from "react";
import treatment from "../../assets/images/treatment.png";

const Extra = () => {
  return (
    <div className="hero min-h-screen lg:py-16">
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold lg:pl-32">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 lg:pl-32 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary  bg-gradient-to-r from-secondary to-primary text-white font-bold lg:ml-32">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extra;
