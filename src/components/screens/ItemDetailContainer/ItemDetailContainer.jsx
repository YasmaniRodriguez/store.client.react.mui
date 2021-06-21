import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemDetailContainerStyle } from './ItemDetailContainerStyles.js';
import { ItemDetail } from '../../widgets/ItemDetail/ItemDetail.jsx';
import { icons } from '../../../App.js';

const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

export const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            { id: 'pdt02', category: 'ctg01', name: 'jamón, morrón y aceitunas', price: '$700', description: 'La infaltable, sencilla pero que no defrauda.'}
        ), 2000);
    })
}

export const ItemDetailContainer = props => {

    const [item, setItem] = useState({});

    const filterItems = () => {
        getItems().then(data => {
            const filteredData = data;
            setItem(filteredData);
        })
    }
    
    const filteredIcon = () => {
        const myicon = icons.filter(category => category.id === item.category);
        return myicon[0];
    }

    useEffect(() => {
        filterItems();
    }, []);

    const icon = filteredIcon();

    const classes = useStyles();

    return <div className={classes.container}>
        <ItemDetail {...item} {...icon}/>
    </div>
}