import React from "react";
import chair from "../../assets/images/chair.png";
import bgChair from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section style={{ background: `url(${bgChair})` }}>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-36">
          <img
            src={chair}
            alt="Dentist chair"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
