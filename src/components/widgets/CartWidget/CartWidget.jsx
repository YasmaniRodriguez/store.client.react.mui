import React from 'react';
import './CartWidget.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export const CartWidget = () => {

    return <div id="cart-view-cta">
        <div id="cart-icon">
            <ShoppingBasketIcon/>
        </div>
        <div id="cart-btn"></div>
    </div>
}