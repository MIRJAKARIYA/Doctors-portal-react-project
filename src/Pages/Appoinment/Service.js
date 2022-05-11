import React from "react";

const Service = ({ service,setTreatment }) => {
  const { name, slots } = service;
  return (
    <>
      <div className="car bg-base-100 shadow-xl rounded-xl text-center">
        <div className="card-body">
          <h2 className="text-xl font-semibold text-secondary">{name}</h2>
          <p>
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">No Slot available</span>
            )}
          </p>
          <p className="uppercase text-sm">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div className="card-actions">
            <label
              htmlFor="booking-modal"
              className="btn bg-gradient-to-tr btn-modal from-secondary to-primary border-0 flex mx-auto w-[190px] text-white"
              disabled={slots.length === 0}
              onClick={()=>setTreatment(service)}
            >
              BOOK APPOINMENT
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
