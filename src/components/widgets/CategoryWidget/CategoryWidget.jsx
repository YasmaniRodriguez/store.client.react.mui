import React from 'react';
import { makeStyles } from '@material-ui/core';
import { categoryWidgetStyle } from './CategoryWidgetStyles.js';

const useStyles = makeStyles((theme) => categoryWidgetStyle(theme));

export const CategoryWidget = ({name, icon}) => {

    const classes = useStyles();

    return <div className={classes.container}>
        <p>{name}</p>
    </div>
}