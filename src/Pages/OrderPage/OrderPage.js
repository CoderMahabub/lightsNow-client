/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks//useAuth';
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProducts from '../../hooks/useProducts';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import './OrderPage.css';

const OrderPage = () => {
    const { _id } = useParams();
    const [products] = useProducts();
    const singleProduct = products?.find(light => light._id === _id);
    const { user } = useAuth();

    //React Hook Form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://agile-retreat-45077.herokuapp.com/addOrders`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
        reset();
        toast.success("Order Done Successfully", {
            position: "top-right"
        });
    }
    return (
        <>
            <NavBar></NavBar>
            <div className="container booking py-5">
                <h1 className="text-dark fw-bold">Order Light Now</h1>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Container>
                        <Row>
                            <Col className="border p-3">
                                {(products.length !== 0) &&
                                    <div>
                                        <h2 className="text-success pb-2"><u>Order Light Detail</u></h2>
                                        <Row className="d-flex justify-content-center align-items-center border text-start">
                                            <Col sm={12} md={2}>
                                                <img className="img-fluid" width="100%" height="auto" src={singleProduct?.lightThumbnail} />
                                            </Col>
                                            <Col sm={12} md={10}>
                                                <p className="px-2">{singleProduct?.lightDescription.slice(0, 150)} .....</p>
                                            </Col>
                                        </Row>
                                        <br />
                                        <label htmlFor="pTitle">Lights Name : </label>
                                        <input readOnly defaultValue={singleProduct?.lightTitle} {...register("lightTitle")} id="lightTitle" />
                                        <br />
                                        <label htmlFor="pDuration">Lights Price: $ </label>
                                        <input readOnly defaultValue={singleProduct?.lightPrice} {...register("lightPrice")} id="lightPrice" />
                                    </div>
                                }
                            </Col>
                            <Col className="border p-3">
                                <h2 className="text-success pb-2"><u>Customer Detail</u></h2>
                                <label htmlFor="cName">Customer Name: </label>
                                <input defaultValue={user?.displayName} {...register("cName")} id="cName" />
                                <br />
                                <label htmlFor="cEmail">Customer Email : </label>
                                <input defaultValue={user?.email} {...register("cEmail")} id="cEmail" />

                                <br />
                                <label htmlFor="cPhone">Customer Phone: </label>
                                <input placeholder="Phone Number" {...register("cPhone", { required: true })} id="cPhone" />

                                <br />
                                <label htmlFor="cAddress">Customer Adress: </label>
                                <input placeholder="Please Type Your Address" {...register("cAddress", { required: true })} id="cAddress" />
                            </Col>
                        </Row>
                    </Container>
                    {(errors.cPhone || errors.cAddress) && <span className="text-danger fw-bold fs-5">All the fields are required!</span>} <br />
                    <br />
                    <div className="hidden-field">
                        <input defaultValue="Pending" {...register("status")} />
                    </div>
                    <input className="btn btn-lg btn-success text-light" type="submit" value="Place Order" />
                </form>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </>
    );
};

export default OrderPage;