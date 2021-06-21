import React from 'react';
import { makeStyles } from '@material-ui/core';
import { brandWidgetStyle } from './BrandWidgetStyles.js';

const useStyles = makeStyles((theme) => brandWidgetStyle(theme));

export const BrandWidget = () => {

    const classes = useStyles();

    return <div className={classes.container}>
        <img src="images/logo.png" alt="" />
        <h2>Yeah!</h2>
    </div>
}