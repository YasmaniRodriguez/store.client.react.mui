import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BusinessContext } from '../../contexts/BusinessContext.js';
import { CartContext } from '../../contexts/CartContext.js';
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../../widgets/ItemDetail/ItemDetail.jsx';
/*
Este es un componente contenedor de primer nivel y su responsabilidad es buscar con array.find()
dentro de las lista Productos disponibilizaos en el BusinessContext, aquel que coincida 
con valor del parametro onlyShowProduct que recibo por useParams() y asi pasarselos por props 
al componente dummy encargado de la visualizacion.
*/
export const ItemDetailContainer = props => {
    const classes = useStyles();
    const {id:onlyShowProduct} = useParams();
    const { availableProducts } = useContext(BusinessContext);
    const [quantity, setQuantity] = useState(1);
    const [showCheckOutButton, setShowCheckOutButton] = useState(false);
    const {addOrderRow} = useContext(CartContext);

    const findProduct = listOfProducts => listOfProducts.find(product => product.id === onlyShowProduct) 

    const product = findProduct(availableProducts);

    const [newOrderRow, setNewOrderRow] = useState({
        product: {},
        quantity: 0 
    });

    useEffect(() => {
        setNewOrderRow({ product: product, quantity: quantity});
    }, [quantity])

    
    return <section className={classes.container}>
        <ItemDetail 
        product={product}
        qty={quantity}
        setQty={setQuantity}
        showCheckOut={showCheckOutButton}
        setShowCheckOut={setShowCheckOutButton}
        addToOrder={addOrderRow}
        newOrderRow={newOrderRow}
        />
    </section>
}


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        display: 'flex'
    }
}));