import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
    return (
        <div className="call-to-action d-flex align-items-center">
            <Container className=" text-light text-start">
                <h1 className="fw-bold pb-3">End of season 2021 <br /> sale up to 30%</h1>
                <p className="py-3">Stock is limited. Order now to avoid <br /> disappointment!</p>
                <NavLink to="/exploreLights">
                    <button className="btn btn-warning text-light">Explore Now</button>
                </NavLink>
            </Container>
        </div>
    );
};

export default CallToAction;