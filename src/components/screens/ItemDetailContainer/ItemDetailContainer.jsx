import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BusinessContext } from '../../contexts/BusinessContext.js';
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../../widgets/ItemDetail/ItemDetail.jsx';

export const ItemDetailContainer = props => {

    const classes = useStyles();

    const {id:onlyShowProduct} = useParams();

    const { availableProducts } = useContext(BusinessContext);

    const findProduct = () => {
        return availableProducts.find(product => product.id === onlyShowProduct);
    }

    const product = findProduct();

    return <section className={classes.container}>
        <ItemDetail {...product}/>
    </section>
}


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        display: 'flex'
    }
}));