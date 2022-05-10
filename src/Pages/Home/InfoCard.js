import React from "react";

const InfoCard = ({item}) => {

  return (
    <div className={`card text-white py-[25px] px-[25px] lg:card-side ${item.bgColor} shadow-xl`}>
      <div className="flex items-center justify-center">
        <img
          src={item.img}
          alt="Album"
          className="w-[120px] h-[120px]"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.des}</p>
      </div>
    </div>
  );
};

export default InfoCard;
