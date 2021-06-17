import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemDetailStyle } from './ItemDetailStyles.js';
import { getItems } from '../../screens/ItemDetailContainer/ItemDetailContainer.jsx';

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = () => {

    const [item, setItem] = useState({});

    const filterItems = () => {
        getItems().then(data => {
            const filteredData = data;
            setItem(filteredData);
        })
    } 

    useEffect(() => {
        filterItems();
    }, []);

    const classes = useStyles();

    const {name, price, description} = item;

    return <div className={classes.container}>
        <div id="item-galery">
            <img src="" alt="" />
        </div>
        <div id="vertical-line"></div>
        <div id="item-detail">
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    </div>
}