import React from 'react';

import SHOP_DATA from './shop.data';
import ShopPreview from '../../components/shop-preview/shop-preview.component';

class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {collections.map(({id, ...rest})=>(
                    <ShopPreview key={id} {...rest}/>
                ))}
            </div>
        )
    }
}

export default Shop;