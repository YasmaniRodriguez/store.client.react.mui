import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemDetailStyle } from './ItemDetailStyles.js';

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = props => {

    const { name, price, description, icon} = props;

    console.log(icon);

    const classes = useStyles();

    return <div className={classes.container}>
        <div id="item-galery">
            <img src={icon} alt="" />
        </div>
        <span id="vertical-line"></span>
        <div id="item-detail">
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    </div>
}