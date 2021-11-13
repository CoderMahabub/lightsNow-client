import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Review = ({ review }) => {
    return (
        <Col className="review-card">
            <Card className="py-2">
                <Card.Img variant="top" height="100px" width="100px" src={review.cPhoto} />
                <Card.Body>
                    <Card.Title>{review.cName}</Card.Title>
                    <Card.Text>
                        {review.cReview.slice(0, 150)}...
                    </Card.Text>
                    <Rating
                        initialRating={review.cRating}
                        readonly
                        emptySymbol={<StarBorderIcon color="warning" />}
                        fullSymbol={<StarIcon color="warning" />}
                    />
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;