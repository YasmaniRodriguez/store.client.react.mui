import React, {useEffect, useState} from 'react';
import { Button, Typography, makeStyles, IconButton, useMediaQuery } from '@material-ui/core';
import {ShoppingBasket} from '@material-ui/icons';
import { Pizza } from '../CustomIcons/Pizza';
import { Pie } from '../CustomIcons/Pie';
import { Patty } from '../CustomIcons/Patty';
import { Drink } from '../CustomIcons/Drink';

export const NavBar = props => {

    const classes= useStyles();

    const matchesMobile = useMediaQuery('(max-width: 650px)');

    return <header className={classes.container}>
        <Button><Typography variant="h2">Yeah!</Typography></Button>
        <div className={classes.categories}>
            <Button><Typography variant="h4">Pizzas</Typography></Button>
            <Button><Typography variant="h4">Tartas</Typography></Button>
            <Button><Typography variant="h4">Empanadas</Typography></Button>
            <Button><Typography variant="h4">Bebidas</Typography></Button>
        </div>
        <Button className={classes.cart}>
            <ShoppingBasket style={{ fontSize: 40, cursor: 'pointer'}}/>
        </Button>
    </header>
}

const buttonCommonStyles = {
    alignSelf: 'center',
    marginRight: '1em',
    fontSize: '1.2em',
    borderRadius: '50px',
    color: 'white',
    padding: '0.5em 1em',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
    textTransform: 'none',
    background:'none'
}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& > button': {
            ...buttonCommonStyles,
            '&:hover': {
                // background: 'none',
            },
            '& h2': {
                fonSize: 'clamp(2rem,100%,3.75rem)',
                color: 'white',
                fontFamily: 'Ranchers'
            }
        }
    },
    categories: {
        '& > button': {
            ...buttonCommonStyles,
            '&:hover': {
                background: 'none',
                textTransform: 'uppercase'
            },
            '& h4': {
                fonSize: 'clamp(2rem,100%,3.75rem)',
                color: 'white',
                fontFamily: 'Ranchers'
            }
        }
    },
    cart: {
        ...buttonCommonStyles
    }
}));