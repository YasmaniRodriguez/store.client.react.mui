import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, makeStyles, withStyles, Badge, IconButton, Chip, Avatar, useMediaQuery } from '@material-ui/core';
import { ShoppingBasket, MenuIcon } from '@material-ui/icons';
import { Pizza } from '../CustomIcons/Pizza';
import { Pie } from '../CustomIcons/Pie';
import { Patty } from '../CustomIcons/Patty';
import { Drink } from '../CustomIcons/Drink';

/*
implementar componente chip para las categorias
implementar hamburg menu para las dimensiones mobile
*/
export const NavBar = props => {

    const myCategory = {
        'pizzas': 'ctg01',
        'tartas': 'ctg02',
        'empanadas': 'ctg03',
        'bebidas': 'ctg04'
    } 

    const getCategoryId = name => myCategory[name];

    const classes= useStyles();

    const matchesMobile = useMediaQuery('(max-width: 650px)');

    return <header className={classes.container}>
        <Link to={'/'}><Typography variant="h2">Yeah!</Typography></Link>

        <div className={classes.categories}>

            {matchesMobile ? <IconButton
            aria-label="close"
            color="inherit">
                <Pizza/>
            </IconButton> : <Link to={'/category/'+getCategoryId('pizzas')}><Typography variant="h4">Pizzas</Typography></Link>}

            {matchesMobile ? <IconButton
            aria-label="close"
            color="inherit">
                <Pie/>
            </IconButton> : <Link to={'/category/'+getCategoryId('tartas')}><Typography variant="h4">Tartas</Typography></Link>}

            {matchesMobile ? <IconButton
            aria-label="close"
            color="inherit">
                <Patty/>
            </IconButton> : <Link to={'/category/'+getCategoryId('empanadas')}><Typography variant="h4">Empanadas</Typography></Link>}

            {matchesMobile ? <IconButton
            aria-label="close"
            color="inherit">
                <Drink/>
            </IconButton> : <Link to={'/category/'+getCategoryId('bebidas')}><Typography variant="h4">Bebidas</Typography></Link>}

        </div>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
            <ShoppingBasket style={{ fontSize: 40, cursor: 'pointer'}}/>
            </StyledBadge>
        </IconButton>
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

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);