import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo2.png';
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
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    <b className="text-warning fw-bold"><span className="text-danger">LIGHTS</span>NOW</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="fw-bold text-dark" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="fw-bold text-dark" as={HashLink} to="/exploreLights">Explore-Lights</Nav.Link>
                        <Nav.Link className="fw-bold text-dark" as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                        {(!user?.email) ? <Nav.Link className="fw-bold text-dark" as={HashLink} to="/login">Login</Nav.Link>
                            : <>
                                <span className="fw-bold mt-1 mx-2 text-success border p-1">{user?.displayName}</span>
                                <button onClick={handleLogout} className="btn btn-sm btn-dark">Logout</button>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;