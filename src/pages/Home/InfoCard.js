import React from "react";

const InfoCard = ({ img, cardTitle, cardText, bgClass }) => {
  return (
    <div class={`card lg:card-side ${bgClass} shadow-xl`}>
      <figure className="lg:pl-5 lg:pt-0 pt-5">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title ">{cardTitle}</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
