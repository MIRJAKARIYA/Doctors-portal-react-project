import React from 'react';
import AnotherBanner from './AnotherBanner';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AnotherBanner></AnotherBanner>
        </div>
    );
};

export default Home;