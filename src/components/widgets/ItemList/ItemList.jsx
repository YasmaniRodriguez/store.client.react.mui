import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Item } from '../Item/Item.jsx';
/*
Este es un componente contenedor de segundo nivel y su responsabilidad es 
mapear los productos que recibio de su padre y pasarle cada uno por props 
al componente dummy encargado de la visualizacion.
*/
export const ItemList = ({ products }) => {

    const classes = useStyles();
    
    return (
        <>
        {products.length === 0 ? (<div className={classes.loadingContainer}><Typography className={classes.loadingText} variant="h3">Cargando...</Typography></div>) : (
            <Grid container spacing={20} justify="center">
            {
                products.map((product, i) =>
                <React.Fragment key={i}>
                    <Item index={i} {...product}/>
                </React.Fragment>)
            }
        </Grid> 
        )}
        </>
    )      
}

const useStyles = makeStyles((theme) => ({
    loadingContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    loadingText: {
        fontFamily: 'Ranchers'
    }
}));