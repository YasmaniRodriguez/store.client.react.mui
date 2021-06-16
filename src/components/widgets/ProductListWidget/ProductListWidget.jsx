import React, { useState, useEffect } from 'react';
import { Icon, makeStyles } from '@material-ui/core';
import { productListStyle } from './ProductListWidgetStyles';
import { ProductWidget } from '../../widgets/ProductWidget/ProductWidget.jsx';
import { myPromise } from '../../layouts/ProductCatalog/ProductCatalog.jsx';
import { getCtgIcon } from '../../layouts/ProductCatalog/ProductCatalog.jsx';

const useStyles = makeStyles((theme) => productListStyle(theme));

export const ProductListWidget = () => {

    const [products, setProducts] = useState([]);

    const myProducts = () => {
        myPromise().then(data => {
            const filteredData = data;
            setProducts(filteredData);
        })
    } 

    useEffect(() => {
        myProducts();
    }, []);

    const classes = useStyles();

    return <div className={classes.productListContainer}>
            {products.map((product, i) => <React.Fragment key={i}>
                <ProductWidget icon = {getCtgIcon(product.category)} {...product} />
            </React.Fragment>)}
    </div>
}