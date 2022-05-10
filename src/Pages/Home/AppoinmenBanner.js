import React from "react";
import Doctor from '../../assets/images/doctor-small.png';
import PrimaryButton from "../Shared/PrimaryButton";
import './AppoinmentBanner.css';

const AppoinmenBanner = () => {
  return (
    <div className="md:mt-[200px] mt-[70px] flex md:h-[550px] appoinment-banner-style">
      <div className="md:flex-1 hidden md:block relative mr-10">
          <img src={Doctor} className='h-[690px] absolute left-[17%] top-[-25.5%] w-[700px]' alt="" />
      </div>
      <div className="md:flex-1 mx-[28px] md:mx-0 my-[71px] md:my-0 md:flex items-center">
        <div className="md:w-[85%] text-white">
          <h3 className="text-secondary text-xl font-bold">Appoinment</h3>
          <h1 className="text-5xl mt-[22px]">Make an appoinment Today</h1>
          <p className="my-[22px]">
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

export default AppoinmenBanner;
