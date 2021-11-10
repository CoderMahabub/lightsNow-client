import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import slideOne from '../../../Images/Slider/slider1.jpg';
import slideTwo from '../../../Images/Slider/slider2.jpg';
import slideThree from '../../../Images/Slider/slider3.jpg';

const Slider = () => {
    return (
        <Carousel className="h-70">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slideOne}
                    alt="First slide"
                />
                <Carousel.Caption className="text-dark fw-bold mb-5">
                    <h1 className="shadow-none p-2 bg-light rounded">Decorative Lighting</h1>
                    <p className="shadow-none p-1 bg-light rounded">Sale up to 50% off Today</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slideTwo}
                    alt="Second slide"
                />
                <Carousel.Caption className="text-dark fw-bold mb-5">
                    <h1 className="shadow-none p-2 bg-light rounded">Lighting Accessories</h1>
                    <p className="shadow-none p-1 bg-light rounded">Sale up to 40% off this week</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slideThree}
                    alt="Third slide"
                />
                <Carousel.Caption className="text-dark fw-bold mb-5">
                    <h1 className="shadow-none p-2 bg-light rounded">Shaded Chandelier</h1>
                    <p className="shadow-none p-1 bg-light rounded">We are an Award Winning Lights</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;