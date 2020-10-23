import React from 'react';
import ShopItem from '../shop-item/shop-item.component';
import './shop-preview.styles.scss';
export default function ShopPreview({title, items}) {
    return (
      <div className="shop-preview">
          <h1>{title.toUpperCase()}</h1>
          <div className="preview">
             {
                 items.filter((itm,idx) => idx < 4)
                 .map(({id, ...rest})=>(
                     <ShopItem key={id} {...rest} />
                 ))
             }
          </div>
      </div>
    )
}