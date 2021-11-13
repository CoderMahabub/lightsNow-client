import React, { useState, useEffect } from 'react';
import Review from './Review/Review';
import { Row } from 'react-bootstrap';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://agile-retreat-45077.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="container py-5">
            <h1 className="text-danger fw-bold my-2">Customer Reviews</h1>
            <hr className="mb-4 bg-danger py-1 mt-0 d-inline-block mx-auto title-bottom" />
            {reviews.length !== 0 && <Row xs={1} md={4} className="g-4">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </Row>
            }
        </div>
    );
};

export default CustomerReview;