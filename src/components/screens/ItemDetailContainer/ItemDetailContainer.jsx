import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BusinessContext } from '../../contexts/BusinessContext.js';
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