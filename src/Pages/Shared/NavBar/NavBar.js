import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
    const { user, handleLogout } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="100%"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="text-dark fw-bold">NOW</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="fw-bold text-dark" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="fw-bold text-dark" as={HashLink} to="/exploreLights">Explore-Lights</Nav.Link>
                        <Nav.Link className="fw-bold text-dark" as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                        {(!user?.email) ? <Nav.Link className="fw-bold text-dark" as={HashLink} to="/login">Login</Nav.Link>
                            :
                            <button onClick={handleLogout} className="btn btn-sm btn-dark">Logout</button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;