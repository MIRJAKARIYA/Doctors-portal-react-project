import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinments = ({date}) => {
    const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);


    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    }, [])
    return (
        <div className='mt-[100px]'>
            <h1 className='text-xl text-secondary font-semibold text-center'>Available Appoinments on {format(date||new Date(), 'PP')}</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1500px] lg:mx-auto mx-[25px] mt-[70px]'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;