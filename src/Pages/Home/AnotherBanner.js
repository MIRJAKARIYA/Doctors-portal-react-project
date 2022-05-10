import React from "react";
import Treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const AnotherBanner = () => {
  return (
    <div className="hero max-w-[1300px] mx-auto mt-[100px]">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img src={Treatment} className="max-w-sm rounded-lg" alt="" />
        </div>
        <div className="lg:ml-[102px] lg:mx-0 mx-[25px]">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AnotherBanner;
