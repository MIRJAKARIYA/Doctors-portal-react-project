import React from "react";
import Chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppoinmentDateBanner = ({date, setDate}) => {

  return (
    <div className="hero mt-[100px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img src={Chair} className="rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="flex-1">
          <div className=" w-max mx-auto shadow-2xl rounded-xl p-4">
          <DayPicker mode="single" selected={date} onSelect={setDate} styles={{caption:{color:'red'}}}   />
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default AppoinmentDateBanner;
