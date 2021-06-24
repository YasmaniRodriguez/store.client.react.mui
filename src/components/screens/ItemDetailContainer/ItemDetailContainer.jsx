import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../../widgets/ItemDetail/ItemDetail.jsx';
import { getIcon } from '../../widgets/ItemList/ItemList.jsx';

export const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            { id: 'pdt02', category: 'ctg01', name: 'jamón, morrón y aceitunas', price: '$700', description: 'La infaltable, sencilla pero que no defrauda.'}
        ), 2000);
    })
}

export const ItemDetailContainer = props => {

    const [item, setItem] = useState({});

    const filterItems = () => {
        getItems().then(data => {
            setItem(data);
        })
    }

    useEffect(() => {
        filterItems();
    }, []);

    const classes = useStyles();

    return <section className={classes.container}>
        <ItemDetail {...item} icon={getIcon(item.category)}/>
    </section>
}


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        display: 'flex'
    }
}));