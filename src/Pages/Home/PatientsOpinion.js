import React from "react";

const PatientsOpinion = ({ patient }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-10">
      <p className="">
        It is a long established fact that by the readable content of a lot
        layout. The point of using Lorem a more-or-less normal distribu to using
        Content here, content
      </p>

      <div className="flex items-center mt-7">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={patient.img} alt="" />
          </div>
        </div>
        <div className="ml-[14px]">
          <p className="card-title">{patient.name}</p>
          <p>{patient.address}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientsOpinion;
