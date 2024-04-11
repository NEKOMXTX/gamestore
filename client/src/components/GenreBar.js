import { observer } from "mobx-react-lite";
import { React, useContext } from "react";
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';


const GenreBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <ListGroup>
            {product.genres.map(genre =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={genre.id === product.selectedGenre.id} 
                    onClick={() => product.setSelectedGenre(genre)}    
                    key={genre.id}
                >
                    {genre.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default GenreBar;