import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import GenreBar from "../components/GenreBar";

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col className="mt-3" md={3}>
                    <GenreBar/>

                </Col>
                <Col md={9}>

                </Col>

            </Row>
        </Container>
    );
};


export default Shop;