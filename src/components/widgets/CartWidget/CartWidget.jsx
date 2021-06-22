import React from 'react';
import {ShoppingCart} from '@material-ui/icons';

export const CartWidget = () => {

    return <div className="cta" id="order-view-cta">
        <ShoppingCart style={{ fontSize: 40, cursor: 'pointer'}}/>
    </div>
}