import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo2.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './NavBar.css';

const NavBar = () => {
    const { user, handleLogout } = useAuth();
    console.log(user);
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
                        <Nav.Link className="fw-bold text-dark" as={HashLink} to="/contact">Contact</Nav.Link>

                        {(!user?.email) ? <Nav.Link className="fw-bold text-dark" as={HashLink} to="/login">Login</Nav.Link>
                            : <>
                                <Nav.Link className="fw-bold text-dark" as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                                <span className="border fw-bold text-success me-2 px-1">{user?.displayName}

                                    {(user?.photoURL) ? <img className='profile ms-1' src={user.photoURL} alt="" />
                                        : <img className='profile ms-1' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />}
                                </span>

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