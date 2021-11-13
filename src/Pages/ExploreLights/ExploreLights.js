import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import FeaturedProduct from '../Home/FeaturedProducts/FeaturedProduct/FeaturedProduct';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const ExploreLights = () => {
    const [products] = useProducts();
    return (
        <div>
            <NavBar></NavBar>
            <Container className="my-5">
                <h1 className="text-danger fw-bold mb-0">Explore Available Lights</h1>
                <hr className="mb-4 bg-danger py-1 mt-0 d-inline-block mx-auto title-bottom" />
                {(products.length !== 0) ? <Row xs={1} md={3} className="g-4">
                    {
                        products.map(fProduct => <FeaturedProduct
                            key={fProduct._id}
                            fProduct={fProduct}
                        ></FeaturedProduct>)
                    }
                </Row> : <div><Spinner className="text-center" animation="border" variant="success" /></div>}
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ExploreLights;