import React from 'react';
import { makeStyles } from '@material-ui/core';
import { itemStyle } from './ItemStyles.js';

const useStyles = makeStyles((theme) => itemStyle(theme));

export const Item = ({id, category, name, description, price, icon}) => {

    const classes = useStyles();

    return <div className={classes.container}>
        <div className='product-galery'>
            <img src={icon}/>
        </div>
        <div className='product-description'>
            <p>{price}</p>
            <p>{name}</p>
        </div>
    </div>
}