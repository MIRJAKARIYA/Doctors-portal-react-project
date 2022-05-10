import React from "react";
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import cavity from '../../assets/images/cavity.png'
import Service from "./Service";
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Flourite Treatment',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, delectus!',
            img:fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, delectus!',
            img:cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, delectus!',
            img:whitening
        }
    ]
  return (
    <div className="mt-[70px]">
      <div className="text-center ">
        <h3 className="text-primary text-xl font-bold uppercase">Our services</h3>
        <h2 className="text-4xl">Services we provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1500px] lg:mx-auto mx-[25px] mt-[70px]">
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
      </div>
    </div>
  );
};

export default Services;
