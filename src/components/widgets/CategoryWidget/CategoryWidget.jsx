import React from 'react';
import { makeStyles } from '@material-ui/core';
import { categoryStyle } from './CategoryWidgetStyles.jsx';

const useStyles = makeStyles((theme) => categoryStyle(theme));

export const CategoryWidget = ({icon}) => {

    const classes = useStyles();

    return <div className={classes.categoryContainer}>
        <img src={icon}/>
    </div>
}