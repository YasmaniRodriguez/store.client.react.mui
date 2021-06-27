import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, makeStyles, IconButton, useMediaQuery } from '@material-ui/core';
import {ShoppingBasket} from '@material-ui/icons';
import { Pizza } from '../CustomIcons/Pizza';
import { Pie } from '../CustomIcons/Pie';
import { Patty } from '../CustomIcons/Patty';
import { Drink } from '../CustomIcons/Drink';

export const NavBar = props => {

    const classes= useStyles();

    const matchesMobile = useMediaQuery('(max-width: 650px)');

    const pizzas = 'ctg01';
    const tartas = 'ctg02';
    const empanadas = 'ctg03';
    const bebidas = 'ctg04';

    return <header className={classes.container}>
        <Link to={'/'}><Typography variant="h2">Yeah!</Typography></Link>

        <div className={classes.categories}>

            {matchesMobile ? <IconButton
            aria-label="close"
            color="inherit">
                <Pizza/>
            </IconButton> : <Link to={'/category/'+pizzas}><Typography variant="h4">Pizzas</Typography></Link>}

            {matchesMobile ? <IconButton
            aria-label="close"
            color="inherit">
                <Pie/>
            </IconButton> : <Link to={'/category/'+tartas}><Typography variant="h4">Tartas</Typography></Link>}

            {matchesMobile ? <IconButton
            aria-label="close"
            color="inherit">
                <Patty/>
            </IconButton> : <Link to={'/category/'+empanadas}><Typography variant="h4">Empanadas</Typography></Link>}

            {matchesMobile ? <IconButton
            aria-label="close"
            color="inherit">
                <Drink/>
            </IconButton> : <Link to={'/category/'+bebidas}><Typography variant="h4">Bebidas</Typography></Link>}

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
                background: 'none',
            },
            '& h2': {
                fonSize: 'clamp(2rem,100%,3.75rem)',
                color: 'white',
                fontFamily: 'Ranchers'
            }
        }
    },
    categories: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
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