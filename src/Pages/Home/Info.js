import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    const item1 = {
        title: 'Opening Hours',
        des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quaerat.',
        img:clock,
        bgColor:'bg-gradient-to-r from-secondary to-primary'
    }
    const item2 = {
        title: 'Visit our location',
        des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quaerat.',
        img:marker,
        bgColor:'bg-accent'
    }
    const item3 = {
        title: 'Contact us now',
        des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quaerat.',
        img:phone,
        bgColor:'bg-gradient-to-r from-secondary to-primary'
    }
    return (
        <div className='grid mt-[80px] lg:mt-0 grid-cols-1 lg:grid-cols-3 mx-[25px] lg:mx-auto max-w-[1500px] gap-5'>
            <InfoCard item={item1}></InfoCard>
            <InfoCard item={item2}></InfoCard>
            <InfoCard item={item3}></InfoCard>
        </div>
    );
};

export default Info;