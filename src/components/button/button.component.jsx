import React from 'react';

import './button.styles.scss';

const CustomButton = ({children, inverted, isGoogleSignIn, ...rest}) => (
    <button className= {`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...rest} >
        {children}
    </button>
)

export default CustomButton;