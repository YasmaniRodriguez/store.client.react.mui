import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { ItemCount } from '../ItemCount/ItemCount.jsx'

export const ItemDetail = ({name, price, description, image}) => {

    const classes = useStyles();

    return <div className={classes.container}>
    <Paper elevation={0}>
        <img src={image} alt={name}></img>
    </Paper>
    <div>
        <div className={classes.detailContent}>
            <Typography variant="h1" component="p">{name}</Typography>
            <Typography variant="h3" component="p">{price}</Typography>
            <Typography variant="h5" component="p">{description}</Typography>
        </div>
        <ItemCount/>
    </div>
    </div>
}

const useStyles = makeStyles((theme) => ({
    container: {
        height: '90vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    '& #item-galery': {
        minWidth: '30vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        '& img': {
            width: '80%',
            height: '80%'
        }
    },

    '& #vertical-line': {
        width: '1px',
        height: '70vh',
        backgroundColor: '#8e6995'
    },

    '& #item-detail': {
        minWidth: '65vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px 20px',

        '& :nth-child(1)': {
            fontSize: '3em',
            textTransform: 'uppercase'
        },

        '& :nth-child(2)': {
            fontSize: '2em'
        },

        '& :nth-child(3)': {
            fontSize: '2em'
        }
    }
}));