import React from "react";
import Patient1 from "../../assets/images/people1.png";
import Patient2 from "../../assets/images/people2.png";
import Patient3 from "../../assets/images/people3.png";
import Quote from "../../assets/icons/quote.svg";
import PatientsOpinion from "./PatientsOpinion";

const Testimonial = () => {
  const patientsOpinion = [
    {
      _id: 1,
      opinion:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: Patient1,
    },
    {
      _id: 2,
      opinion:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: Patient2,
    },
    {
      _id: 3,
      opinion:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: Patient3,
    },
  ];
  return (
    <div className="mt-20 relative">
      <div className="ml-[25px] lg:ml-[56px]">
        <h3 className="text-xl text-secondary font-bold mb-1">Testimonial</h3>
        <h1 className="text-5xl">What Our Patients Says</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1500px] lg:mx-auto mx-[25px] lg:mt-[120px] mt-[50px]">
        {patientsOpinion.map((patient) => (
          <PatientsOpinion key={patient._id} patient={patient}></PatientsOpinion>
        ))}
      </div>
      <img
        className="absolute top-[2%] w-[192px] h-[156px] right-[8%]"
        src={Quote}
        alt=""
      />
    </div>
  );
};

export default Testimonial;
