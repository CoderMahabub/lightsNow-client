import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';

const FeaturedProducts = () => {
    const [products] = useProducts();
    const featured = products.slice(0, 6);
    return (
        <div className="container my-5">
            <h1 className="text-danger fw-bold py-2 mt-3 mb-0">Featured Lights</h1>
            <hr className="mb-4 bg-danger py-1 mt-0 d-inline-block mx-auto title-bottom" />
            {(featured.length !== 0) ? <Row xs={1} md={3} className="g-4">
                {
                    featured.map(fProduct => <FeaturedProduct
                        key={fProduct._id}
                        fProduct={fProduct}
                    ></FeaturedProduct>)
                }
            </Row> : <div><Spinner className="text-center" animation="border" variant="success" /></div>}
        </div>
    );
};

export default FeaturedProducts;