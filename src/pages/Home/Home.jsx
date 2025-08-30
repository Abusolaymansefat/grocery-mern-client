import React from 'react';
import Banner from '../../components/Shared/Banner';
import About from '../../components/Shared/About';
import OurClientsSay from '../../components/Shared/OurClientsSay';


const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner/>
            <About/>
            <OurClientsSay/>
        </div>
    );
};

export default Home;