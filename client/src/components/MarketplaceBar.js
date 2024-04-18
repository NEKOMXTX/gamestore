import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Card } from 'react-bootstrap';

const MarketplaceBar = observer(() => {
    const {product} = useContext(Context)
    
    return (
        <div className='d-flex flex-row'>
        {product.marketplaces.map(marketplace =>
            <Card
                style={{cursor:'pointer'}}
                key={marketplace.id}
                className="p-3"
                onClick={() => product.setSelectedMarketplace(marketplace)}
                border={marketplace.id === product.selectedMarketplace.id ? 'danger' : 'light'}
            >
                {marketplace.name}
            </Card>
        )}
    </div>
    );
});

export default MarketplaceBar;