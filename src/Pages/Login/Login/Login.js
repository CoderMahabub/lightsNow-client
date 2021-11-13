/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import NavBar from '../../Shared/NavBar/NavBar';
import leftBg from '../../../Images/loginbg.jpg';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { googleSignIn, loading, loginUser, user, error } = useAuth();

    // THis is for Redirect to the initial page after login
    const location = useLocation()
    const history = useHistory();


    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                // Save user to database
                saveUser(result.user.email, result.user.displayName);
                history.push(redirect_uri);
            })
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://agile-retreat-45077.herokuapp.com/users', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then()
    }

    // Get Field Value
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
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
                                placeholder="Your Email"
                                name="email"
                                onChange={handleOnChange}
                            />
                            <Form.Control
                                className="my-2"
                                type="password"
                                placeholder="Your Password"
                                name="password"
                                onChange={handleOnChange}
                            />
                            <Button className="my-2 w-50 fw-bold" type="submit" variant="success">Login</Button>
                        </form>}
                        <div>
                            {loading && <Spinner animation="border" variant="success" />}
                            {user?.email && <Alert variant="success">
                                Congrats, Login Successful.
                            </Alert>}
                            {error && <Alert variant="danger">
                                {error}
                            </Alert>}
                        </div>
                        <NavLink to="/register">
                            <Button className="text-decoration-none fw-bold" variant="link">NEW USER? PLEASE REGISTER</Button>
                        </NavLink>
                        <hr />
                        <div>***** OR *****</div>
                        <Button className="fw-bold" variant="danger" onClick={handleGoogleLogIn}>Login Using Google</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;