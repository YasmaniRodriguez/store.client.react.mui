import React from 'react';
import { makeStyles } from '@material-ui/core';
import { categoryStyle } from './CategoryWidgetStyles.js';

const useStyles = makeStyles((theme) => categoryStyle(theme));

export const CategoryWidget = ({name}) => {

    const classes = useStyles();

    return <div className={classes.categoryContainer}>
        <p>{name}</p>
    </div>
}