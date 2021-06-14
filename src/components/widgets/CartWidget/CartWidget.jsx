import React from 'react';
import { makeStyles } from '@material-ui/core';
import { cartStyle } from './CartWidgetStyles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles((theme) => cartStyle(theme));

export const CartWidget = () => {

    const classes = useStyles();

    return <div className={classes.cartViewCta}>
        <div id="cart-icon">
            <ShoppingBasketIcon/>
        </div>
        <div id="cart-btn"></div>
    </div>
}