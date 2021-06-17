import React from 'react';
import { makeStyles } from '@material-ui/core';
import { pageFooterStyle } from './PageFooterStyles.jsx'
import { CartWidget } from '../CartWidget/CartWidget.jsx';

const useStyles = makeStyles((theme) => pageFooterStyle(theme));

export const PageFooter = () => {

    const classes = useStyles();

    return <footer className={classes.pageFooter}>
        <CartWidget/>
    </footer>
}