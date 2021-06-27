import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';

export const Item = ({id, name, price, image}) => {

    const classes = useStyles();

    return <Card className={classes.container}>
            <Link to={'/product/'+id}>
                <CardMedia className={classes.media}
                image={image}
                style={{backgroundSize: 'contain'}}
                />
            </Link>
        <CardContent className={classes.content}>
            <Typography className={classes.product} variant="h6">{name}</Typography>
            <Typography className={classes.price}>{price}</Typography>
            <Button className={classes.button} size="medium" variant="outlined" fontFamily='Ranchers'>Agregar al carrito</Button>
        </CardContent>
    </Card>
}

const useStyles = makeStyles((theme) => ({
    container: {
        width: '25em',
        height: '30em',
        margin: '1em',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        fontFamily: theme.typography.fontFamily.Ranchers
    },
    media: {
        height: '10em'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    product: {
        textTransform: 'uppercase',
        fontFamily: 'Ranchers'
    },
    price: {
        padding: '10px 0px',
        fontFamily: 'Ranchers'
    },
    button: {
        borderColor: theme.palette.success.light,
        color: theme.palette.success.light,
        textTransform: 'none',
        borderRadius: 50,
        fontFamily: 'Ranchers'
    }
}));
