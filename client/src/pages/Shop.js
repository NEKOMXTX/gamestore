import React, { useContext, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import GenreBar from "../components/GenreBar";
import MarketplaceBar from "../components/MarketplaceBar";
import ProductList from "../components/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchGenres, fetchMarketplaces, fetchOneProduct, fetchProducts } from "../http/productAPI";

const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchGenres().then(data => product.setGenres(data))
        fetchMarketplaces().then(data => product.setMarketplaces(data))
        fetchProducts().then(data => product.setProducts(data.rows)) // rows из-за пагинации
    }, [])

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
});


export default Shop;