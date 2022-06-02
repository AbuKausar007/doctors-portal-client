import React from "react";
import chair from "../../assets/images/chair.png";
import background from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Start</h1>
          <h1 class="text-5xl font-bold">Here!</h1>

          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <button class="btn btn-primary  bg-gradient-to-r from-secondary to-primary text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;