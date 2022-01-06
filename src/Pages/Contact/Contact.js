import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";


const Contact = () => {
    // FontAwesomeIcon
    const locationIcon = <FontAwesomeIcon icon={faLocationArrow} />
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const messageIcon = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <>
            <NavBar />
            <div className="contact-us pb-3">
                <div className="contact-top bg-dark">
                    <h2 className="fs-1 font-weight-bolder text-center my-4 text-decoration-underline">Contact us</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>

                </div>
                <section className="container my-5">
                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5 text-start">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label for="name" class="">Your name</label>
                                            <input type="text" id="name" name="name" className="form-control" />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label for="email" class="">Your email</label>
                                            <input type="text" id="email" name="email" className="form-control" />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0 mt-2">
                                            <label for="subject" class="">Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mt-2">
                                            <label for="message">Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="text-left mt-2 text-md-left">
                                <Link className="btn btn-dark">Send Message</Link>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i>{locationIcon}</i>
                                    <p>Road No. 12, Sector - 10, Dhaka 1230</p>
                                </li>

                                <li><i>{phoneIcon}</i>
                                    <p>+ 01 234 567 89</p>
                                </li>
                                <li><i>{messageIcon}</i>
                                    <p>contact@goExplore.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Contact;