import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentDateBanner from './AppoinmentDateBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppoinmentDateBanner date={date} setDate={setDate}></AppoinmentDateBanner>
            <AvailableAppoinments date={date}></AvailableAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;