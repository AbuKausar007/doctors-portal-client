import React from "react";
import bgContact from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section style={{ background: `url(${bgContact})` }} className="py-10">
      <div className="text-center">
        <h3 className="text-2xl text-primary font-bold pb-2">Contact Us</h3>
        <h1 className="text-4xl text-white">Stay Connected With Us</h1>
        <div>
          <form action="" className="flex flex-col justify-center items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="input lg:w-full max-w-lg w-3/4  mt-10 mb-5"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input lg:w-full max-w-lg w-3/4 mb-5"
            />
            <input
              type="text"
              placeholder="Your Message"
              className="input lg:w-full h-28 max-w-lg w-3/4 mb-5"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary text-white font-bold px-6 py-2"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
