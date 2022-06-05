import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bgChair from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <section style={{ background: `url(${bgChair})` }}>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse gap-36">
          <img
            src={chair}
            alt="Dentist chair"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
