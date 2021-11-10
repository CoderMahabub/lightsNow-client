import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import CallToAction from '../CallToAction/CallToAction';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <CallToAction></CallToAction>
            <Footer></Footer>
        </div>
    );
};

export default Home;