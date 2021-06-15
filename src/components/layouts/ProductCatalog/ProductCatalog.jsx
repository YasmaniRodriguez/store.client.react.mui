import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { productCatalogStyle } from './ProductCatalogStyles.jsx';
import { ProductListWidget } from '../../widgets/ProductListWidget/ProductListWidget.jsx';

const useStyles = makeStyles((theme) => productCatalogStyle(theme));

export const products = [
    {
        id: 'pdt01',
        category: 'ctg01',
        name: 'mozzarella',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '500'
    },
    {
        id: 'pdt02',
        category: 'ctg01',
        name: 'jamón y morrones',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '500'
    },
    {
        id: 'pdt03',
        category: 'ctg01',
        name: 'napolitana',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '500'
    },
    {
        id: 'pdt04',
        category: 'ctg01',
        name: 'cuatro quesos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '500'
    },
    {
        id: 'pdt05',
        category: 'ctg01',
        name: 'fugazzetta',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '500'
    },
    {
        id: 'pdt06',
        category: 'ctg02',
        name: 'jamón y queso',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '250'
    },
    {
        id: 'pdt07',
        category: 'ctg02',
        name: 'atún',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '250'
    },
    {
        id: 'pdt08',
        category: 'ctg02',
        name: 'pollo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '250'
    },
    {
        id: 'pdt09',
        category: 'ctg02',
        name: 'verduras',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '250'
    },
    {
        id: 'pdt10',
        category: 'ctg02',
        name: 'carne y huevo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '250'
    },
    {
        id: 'pdt11',
        category: 'ctg03',
        name: 'carne suave',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '125'
    },
    {
        id: 'pdt12',
        category: 'ctg03',
        name: 'atún',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '125'
    },
    {
        id: 'pdt13',
        category: 'ctg03',
        name: 'humita',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '125'
    },
    {
        id: 'pdt14',
        category: 'ctg03',
        name: 'pollo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '125'
    },
    {
        id: 'pdt15',
        category: 'ctg03',
        name: 'jamón y queso',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '125'
    },
    {
        id: 'pdt16',
        category: 'ctg04',
        name: 'gaseosa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '80'
    },
    {
        id: 'pdt17',
        category: 'ctg04',
        name: 'agua saborizada',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '80'
    },
    {
        id: 'pdt18',
        category: 'ctg04',
        name: 'jugo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '80'
    },
    {
        id: 'pdt19',
        category: 'ctg04',
        name: 'agua sin gas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '80'
    },
    {
        id: 'pdt20',
        category: 'ctg04',
        name: 'cerveza',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: '80'
    }
]

export const ProductCatalog = () => {

    const classes = useStyles();

    return <div className={classes.productCatalog}>
        <ProductListWidget/>
    </div>
}