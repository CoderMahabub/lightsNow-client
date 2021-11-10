import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './FeaturedProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FeaturedProduct = ({ fProduct }) => {
    const priceTag = <FontAwesomeIcon icon={faTags} />
    const { _id, lightThumbnail, lightTitle, lightDescription, lightPrice } = fProduct;
    return (
        <div className="text-start">
            <Col>
                <Card className="pb-2">
                    <Card.Img className="img-fluid product-img" variant="top" src={lightThumbnail} />
                    <Card.Body>
                        <Card.Title className="text-dark fs-2">{lightTitle}</Card.Title>
                        <Card.Text className="text-secondary">
                            {lightDescription.slice(0, 150)}
                        </Card.Text>
                    </Card.Body>
                    <div className="d-flex justify-content-between align-items-center px-2">
                        <Link to="">
                            {/* {`/buyPackage/${_id}`} */}
                            <button className="btn btn-success text-light fw-bold">Book Now!</button>
                        </Link>
                        <span className="text-secondary">{priceTag} <span className="text-warning fw-bold fs-5 ms-1">${lightPrice}</span></span>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default FeaturedProduct;