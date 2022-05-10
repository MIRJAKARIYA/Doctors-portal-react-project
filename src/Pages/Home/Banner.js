import React from "react";
import Chair from "../../assets/images/chair.png";
import './Banner.css';
const Banner = () => {
  return (
    <div className="hero w-auto mx-[25px] extra-style-banner">
      <div className="w-full flex lg:py-24 flex-col-reverse items-center lg:flex-row max-w-[1400px] ">
        <div className="lg:w-1/2">
          <div className="w-full mt-[60px] lg:mt-0">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 mt-[14px] mb-6 lg:mb-[30px]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn border-0 text-white font-semibold bg-gradient-to-r from-secondary to-primary ">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={Chair}
            className="w-full lg:ml-[24px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
