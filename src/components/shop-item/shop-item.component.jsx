import React from 'react';
import './shop-item.styles.scss';
const ShopItem = ({name, imageUrl, price}) => {
    return (
        <div className="shop-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="item-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default ShopItem;