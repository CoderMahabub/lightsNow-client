import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Post Product to MongoDB
    const onSubmit = data => {
        fetch('https://agile-retreat-45077.herokuapp.com/addProduct', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    toast.success("Product added successfully", {
                        position: "top-right"
                    });
                } else {
                    toast.warn("Something went wrong", {
                        position: "top-right"
                    });
                }
            })
        reset();
    };


    return (
        <div>
            <div className="mb-5  py-5">
                <div className="container bg-secondary rounded border p-3">
                    <h1 className="text-light fw-bold"><u>Add a Product</u></h1>
                    <form className="py-2" onSubmit={handleSubmit(onSubmit)}>

                        <input className="my-1 py-2 px-3 w-100 rounded" placeholder="Light Title | example: (Cohen-1-Light-Dome-Pendant)" {...register("lightTitle", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Light Price | example: (100)" {...register("lightPrice", { required: true })} type="number" /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Light Description | example: (Endsley 1-Light Globe LED Pendant ..... )" {...register("lightDescription", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Light Thumbnail | example: (https://i.ibb.co/W6sy9zN/Rome-City-Tour.jpg)" {...register("lightThumbnail", { required: true })} /> <br />

                        <input type="number" className="hidden" defaultValue="4.5" {...register("lightRating", { required: true })} />

                        {(errors.lightTitle || errors.lightRating || errors.lightDescription || errors.lightPrice || errors.lightThumbnail) && <p className="fw-bold text-danger my-1 fs-6">Be Carefully!, All the field are required.</p>}
                        <br />
                        <input className="btn btn-lg btn-light rounded" type="submit" value="Add Product" />
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default AddProduct;