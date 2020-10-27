import React from 'react';

import CustomButton from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropDown;