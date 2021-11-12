import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { productId } = useParams();
    const [updateItem, setUpdateItem] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Post Product to MongoDB
    const onSubmit = data => {
        // console.log(data);
        fetch(`https://agile-retreat-45077.herokuapp.com/updateProduct/${productId}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast.success("Product Updated Successfully");
        reset('')
    };

    useEffect(() => {
        fetch(`https://agile-retreat-45077.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setUpdateItem(data))
    }, [])



    return (
        <div>
            <div className="mb-5  py-5">
                <div className="container bg-secondary rounded border p-3">
                    <h1 className="text-light fw-bold"><u>Update Product</u></h1>
                    {(updateItem.length !== 0) && <form className="py-2" onSubmit={handleSubmit(onSubmit)}>

                        <input className="my-1 py-2 px-3 w-100 rounded" defaultValue={updateItem.lightTitle} {...register("lightTitle", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" defaultValue={updateItem.lightPrice}  {...register("lightPrice", { required: true })} type="number" /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" defaultValue={updateItem.lightDescription} {...register("lightDescription", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" defaultValue={updateItem.lightThumbnail} {...register("lightThumbnail", { required: true })} /> <br />

                        {(errors.lightTitle || errors.lightRating || errors.lightDescription || errors.lightPrice || errors.lightThumbnail) && <p className="fw-bold text-danger my-1 fs-6">Be Carefully!, All the field are required.</p>}
                        <br />
                        <input className="btn btn-lg btn-light rounded" type="submit" value="UPDATE" />
                    </form>}
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;