import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export const CartWidget = () => {

    return <div className="cta" id="order-view-cta">
        <ShoppingBasketIcon style={{ fontSize: 40, cursor: 'pointer', padding: '0px 10px' }}/>
    </div>
}