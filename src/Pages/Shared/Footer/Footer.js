import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faPhone, faFax, faFacebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitterSquare, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const home = <FontAwesomeIcon icon={faHome} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const fax = <FontAwesomeIcon icon={faFax} />
    const fb = <FontAwesomeIcon icon={faFacebookF} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
    const github = <FontAwesomeIcon icon={faGithub} />
    return (
        <div className="my-5">
            <footer className="text-center text-lg-start text-dark">
                <section className="d-flex justify-content-between p-4 text-white bg-dark">
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div className="fs-5">
                        <Link to="/" className="text-white me-4">
                            {fb}
                        </Link>
                        <Link to="/" className="text-white me-4">
                            {linkedIn}
                        </Link>
                        <Link to="/" className="text-white me-4">
                            {twitter}
                        </Link>
                        <Link to="/" className="text-white me-4">
                            {github}
                        </Link>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h3 className="text-uppercase fw-bold text-danger">Lights Now</h3>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto hr-bottom" />
                                <p>
                                    LIGHTS-NOW is one of the biggest shop for decorative lights collection. You well find all the necessary decorative light at one place with cheapest cost.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Explore Lights</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto hr-bottom" />
                                <p>
                                    <Link to="/" className="text-dark me-4">Light Drum Pendant</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-dark me-4">Cotton Novelty Pendant</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-dark me-4">Polyester Empire Lamp</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-dark me-4">Cotton Tapered Pendant</Link>
                                </p>

                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto hr-bottom" />
                                <p>
                                    <Link to="/" className="text-dark me-4">Home Page</Link>
                                </p>
                                <p>
                                    <Link to="/dashboard" className="text-dark me-4">Dashboard</Link>
                                </p>
                                <p>
                                    <Link to="/login" className="text-dark me-4">LogIn/Register</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto hr-bottom" />
                                <p>{home} New York, NY 10012, US</p>
                                <p>{email} info@example.com</p>
                                <p>{phone} + 01 234 567 88</p>
                                <p>{fax} + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-3 footer-bottom">
                    © 2021 Copyright:
                    <Link className="text-dark" to="https://lights-now.web.app/">Lights-Now.web.app</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;