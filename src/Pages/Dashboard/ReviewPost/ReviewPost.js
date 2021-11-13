import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const ReviewPost = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // Post Product to MongoDB
    const onSubmit = data => {
        fetch('https://agile-retreat-45077.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    toast.success("Review successfully", {
                        position: "top-right"
                    });
                } else {
                    toast.warn("Something went wrong", {
                        position: "top-right"
                    });
                }
            })
        reset();
        console.log(data);
    };

    return (
        <div>
            <div className="mb-5  py-5">
                <div className="container bg-success rounded border p-3">
                    <h1 className="text-light fw-bold"><u>Posting Review</u> as <span className="fs-5 text-dark">({user.displayName})</span></h1>
                    <form className="py-2" onSubmit={handleSubmit(onSubmit)}>
                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Type your review here...." {...register("cReview", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Type Rating (0-5) | example: (4.5)" {...register("cRating", { required: true })} /> <br />

                        <input className="my-1 py-1 px-3 w-100 rounded" placeholder="Paste your image url(valid url plz)" {...register("cPhoto", { required: true })} /> <br />
                        <input defaultValue={user.displayName} className="hidden"  {...register("cName", { required: true })} /> <br />

                        {(errors.cReview || errors.cRating || errors.cPhoto) && <p className="fw-bold text-danger my-1 fs-6">Be Carefully!, All the field are required.</p>}
                        <br />
                        <input className="btn btn-lg btn-light rounded" type="submit" value="Post Review" />
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ReviewPost;