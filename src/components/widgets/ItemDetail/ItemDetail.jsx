import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Paper, Typography, makeStyles } from '@material-ui/core';
import { ItemCount } from '../ItemCount/ItemCount.jsx';

export const ItemDetail = ({product, qty, setQty, showCheckOut, setShowCheckOut, addToOrder, removeToOrder, newOrderRow}) => {

    const classes = useStyles();
    const history = useHistory();

    return <div className={classes.container}>
    <Paper elevation={0}>
        <img src={product.image} alt={product.name}></img>
    </Paper>
    <div>
        <div className={classes.detailContent}>
            <Typography variant="h1" component="p">{product.name}</Typography>
            <Typography variant="h3" component="p">{product.price}</Typography>
            <Typography variant="h5" component="p">{product.description}</Typography>
        </div>
        <div className={classes.detailButton}>
            {!showCheckOut? (
            <>
                <ItemCount minQty={1} maxQty={product.stock} qty={qty} setQty={setQty}/>
                <Button onClick={e => {setShowCheckOut(true); addToOrder(newOrderRow)}} variant="outlined">Agregar al carrito</Button>
            </>    
            ) : (
            <>
                <Button onClick={()=> history.push(`/cart`)} variant="outlined">Finalizar mi compra</Button>
                <Button onClick={e => {setShowCheckOut(false); removeToOrder(product.id)}}>Cancelar</Button>
            </> 
                )}
        </div>
    </div>
    </div>
}



// const myButtom = () => {
//     return orderQuantity === 0 ? <AddToCartButton onClick={e => setOrderQuantity(currentQuantity)} /> : <CheckOutButton/>
// }


const useStyles = makeStyles((theme) => ({
    container: {
        height: '90vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    detailContent: {

    },
    detailButton: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));