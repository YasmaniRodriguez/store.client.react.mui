import React from 'react';
import { makeStyles } from '@material-ui/core';
import { productListStyle } from './ProductListWidgetStyles';
import { ProductWidget } from '../../widgets/ProductWidget/ProductWidget.jsx';
import { categories } from '../../layouts/ProductCategory/ProductCategory.jsx'
import { products } from '../../layouts/ProductCatalog/ProductCatalog';

const useStyles = makeStyles((theme) => productListStyle(theme));

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => resolve(products) , 2000);
});

export const getCtgIcon = (category) => {
    let icon;
    for(const ctg of categories) {
        if(category === ctg.id) {
            icon = ctg.icon;
        }
    }
    return icon;
}

export const ProductListWidget = () => {

    const classes = useStyles();

    return <div className={classes.productListContainer}>
            {products.map((product, i) => <React.Fragment key={i}>
                <ProductWidget index={i} {...product}/>
            </React.Fragment>)}
    </div>
}