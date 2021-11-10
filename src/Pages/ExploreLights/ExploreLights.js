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
            <Container>
                <h1 className="bg-dark text-light fw-bold py-2 my-4">Explore All Available Lights</h1>
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