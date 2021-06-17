import React, { useState, useEffect } from 'react';
import { Icon, makeStyles } from '@material-ui/core';
import { productListStyle } from './ProductListWidgetStyles';
import { ProductWidget } from '../Item/ProductWidget.jsx';
import { getItemList } from '../../screens/ItemListContainer/ItemListContainer.jsx';

const useStyles = makeStyles((theme) => productListStyle(theme));

export const ProductListWidget = () => {

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
            <ProductWidget {...product} />
                {/* <ProductWidget icon = {getCtgIcon(product.category)} {...product} /> */}
            </React.Fragment>)}
    </div>
}