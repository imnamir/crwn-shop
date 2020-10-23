import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-util';
import logo from '../../assets/logo.svg';
import './header.styles.scss';

const Header = ({currentUser}) => {
    return(
        <div className="header">
            <Link className="logo-container" to="crwn-shop/">
                <img className="logo" src={logo} alt=""/>
            </Link>
            <div className="options">
                <Link className="option" to="crwn-shop/shop">SHOP</Link>
                <Link className="option" to="crwn-shop/shop">CONTACT</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : 
                    <Link className="option" to="crwn-shop/signin">SIGN IN</Link>
                }
                
            </div>
        </div>
    )
}

export default Header;