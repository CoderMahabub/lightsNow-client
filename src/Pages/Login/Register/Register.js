/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import NavBar from '../../Shared/NavBar/NavBar';
import leftBg from '../../../Images/loginbg.jpg';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { googleSignIn, registerUser, loading, user, error } = useAuth();

    // THis is for Redirect to the initial page after login
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    // Get Field Value
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Password Didn't Match");
            return
        }
        registerUser(loginData.email, loginData.password, history);
        e.preventDefault();
    }

    return (
        <>
            <NavBar></NavBar>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6}>
                        <img className="img-fluid" src={leftBg} alt="image" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>LogIn</h4>
                        {!loading && <form onSubmit={handleLoginSubmit}>
                            <Form.Control
                                className="my-2"
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                required
                            />
                            <Form.Control
                                className="my-2"
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                onBlur={handleOnBlur}
                                required
                            />
                            <Form.Control
                                className="my-2"
                                type="password"
                                placeholder="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                required
                            />
                            <Form.Control
                                className="my-2"
                                type="password"
                                placeholder="ReType Your Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                required
                            />
                            <Button className="my-2 w-50 fw-bold" type="submit" variant="success">Register</Button>
                        </form>}

                        <div>
                            {loading && <Spinner animation="border" variant="success" />}
                            {user?.email && <Alert variant="success">
                                Congrats, Registration Successful
                            </Alert>}
                            {error && <Alert variant="danger">
                                {error}
                            </Alert>}
                        </div>

                        <NavLink to="/login">
                            <Button className="text-decoration-none fw-bold" variant="link">ALREADY REGISTER? PLEASE LOGIN</Button>
                        </NavLink>
                        <hr />
                        <div>=***** OR *****=</div>
                        <Button className="fw-bold" variant="danger" onClick={handleGoogleLogIn}>Login Using Google</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;