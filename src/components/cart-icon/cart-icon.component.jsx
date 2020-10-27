import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import toggleCartDropdown from '../../redux/cart/cartActions';

import './cart-icon.styles.scss'

const CartIcon = ({togglecartHidden}) => (
    <div className="cart-icon" onClick={togglecartHidden}>
        <ShopIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>

)
const mapDispatchToProps = dispatch => ({
    togglecartHidden: () => dispatch(toggleCartDropdown())
})
export default connect(null,mapDispatchToProps)(CartIcon);