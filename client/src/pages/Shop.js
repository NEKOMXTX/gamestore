import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import GenreBar from "../components/GenreBar";
import MarketplaceBar from "../components/MarketplaceBar";
import ProductList from "../components/ProductList";
const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <GenreBar/>
                </Col>
                <Col md={9}>
                    <MarketplaceBar/>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    );
};


export default Shop;