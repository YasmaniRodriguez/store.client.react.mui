import React from 'react';
import { makeStyles, Typography, Avatar, IconButton } from '@material-ui/core';
import {Add, Remove} from '@material-ui/icons';

export const ItemCount = ({minQty, maxQty, qty:currentQuantity, setQty}) => {

    const classes = useStyles();

    const incrementQuantity = () => {
        currentQuantity == maxQty ? setQty(maxQty) : setQty(currentQuantity + 1);
    }

    const decrementQuantity = () => {
        currentQuantity == minQty ? setQty(minQty) : setQty(currentQuantity - 1);
    }

    return <div className={classes.container}>
        <div className={classes.counter}>
            <Typography variant="h1" component="p">{currentQuantity}</Typography>
            <div className={classes.button}>
                <IconButton className={classes.cta}
                onClick={e => incrementQuantity()}
                >
                    <Avatar>
                        <Add/>
                    </Avatar>
                </IconButton>
                <IconButton className={classes.cta}
                onClick={e => decrementQuantity()}
                >
                    <Avatar>
                        <Remove/>
                    </Avatar>
                </IconButton>
            </div>
        </div>
    </div>
}

const useStyles = makeStyles((theme)=> ({
    container: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 5px'
    },
    cta: {
        padding: '1px 1px'
    }
}));