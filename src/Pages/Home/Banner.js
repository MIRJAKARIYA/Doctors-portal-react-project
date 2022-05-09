import React from "react";
import Chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero w-auto mx-[25px] mt-[64px] lg:mt-[150px]">
      <div className="w-full flex flex-col-reverse items-center lg:flex-row">
        <div className="lg:w-1/2">
          <div className="w-full lg:ml-auto max-w-[655px]">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 mt-[14px] mb-[30px]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white font-semibold">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={Chair}
            className="w-full mx-auto max-w-[594px] mb-[60px] lg:mb-0 h-[355px] rounded-md lg:ml-[24px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
