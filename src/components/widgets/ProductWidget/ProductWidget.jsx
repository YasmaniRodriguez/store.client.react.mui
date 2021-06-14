import React from 'react';
import { makeStyles } from '@material-ui/core';
import { productStyle } from './ProductWidgetStyles.jsx';
import './ProductWidgetStyles.jsx';

const useStyles = makeStyles((theme) => productStyle(theme));

export const ProductWidget = ({id, category, name, description, price, icon}) => {

    const classes = useStyles();

    return <div className={classes.productContainer}>
        <div className='product-galery'>
            <img src={icon}/>
        </div>
        <div className='product-description'>
            <p>{price}</p>
            <p>{name}</p>
        </div>
    </div>
}