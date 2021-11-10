import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import CallToAction from '../CallToAction/CallToAction';
import CustomerReview from '../CustomerReview/CustomerReview';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <FeaturedProducts></FeaturedProducts>
            <CallToAction></CallToAction>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;