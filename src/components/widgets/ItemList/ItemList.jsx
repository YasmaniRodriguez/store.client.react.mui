import React, { useState, useEffect } from 'react';
import { Icon, makeStyles } from '@material-ui/core';
import { itemListStyle } from './ItemListStyles.js';
import { Item } from '../Item/Item.jsx';
import { getItemList } from '../../screens/ItemListContainer/ItemListContainer.jsx';

const useStyles = makeStyles((theme) => itemListStyle(theme));

export const ItemList = () => {

    const [products, setProducts] = useState([]);

    const filterItems = () => {
        getItemList().then(data => {
            const filteredData = data; //mas adelante los productos seran filtrados
            setProducts(filteredData);
        })
    } 

    useEffect(() => {
        filterItems();
    }, []);

    const classes = useStyles();

    return <div className={classes.container}>
            {products.map((product, i) => <React.Fragment key={i}>
            <Item {...product} />
                {/* <ProductWidget icon = {getCtgIcon(product.category)} {...product} /> */}
            </React.Fragment>)}
    </div>
}