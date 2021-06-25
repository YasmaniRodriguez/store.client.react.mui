import React, { useState, useEffect, useContext } from 'react';
import { BusinessContextProvider } from '../../contexts/BusinessContext.js';
import { makeStyles } from '@material-ui/core';
import { ItemList } from '../../widgets/ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '70vh',
        width: '100vw',
        display: 'flex'
    }
}));

export const ItemListContainer = () => {

    const classes = useStyles();

    return <section className={classes.container}>
        <ItemList/>
    </section>
}
