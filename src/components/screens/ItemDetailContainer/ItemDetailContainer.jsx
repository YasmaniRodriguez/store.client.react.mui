import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemDetailContainerStyle } from './ItemDetailContainerStyles.js';
import { ItemDetail } from '../../widgets/ItemDetail/ItemDetail.jsx';

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));

export const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            { id: 'pdt02', category: 'ctg01', name: 'jamón, morrón y aceitunas', price: '$700', description: 'La infaltable, sencilla pero que no defrauda.'}
        ), 2000);
    })
}

export const ItemDetailContainer = () => {

    const classes = useStyles();

    return <div className={classes.container}>
        <ItemDetail/>
    </div>
}