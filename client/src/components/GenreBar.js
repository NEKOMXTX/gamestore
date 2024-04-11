import { observer } from "mobx-react-lite";
import React from 'react';
import { useContext } from "react";
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';


const GenreBar = observer(() => {
    const { product } = useContext(Context)
    return (
        <ListGroup>
            {product.genres.map(genre =>
                <ListGroup.Item key={genre.id}>
                    {genre.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default GenreBar;