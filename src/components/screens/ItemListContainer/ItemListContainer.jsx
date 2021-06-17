import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemListContainerStyle } from './ItemListContainerStyles.js';
import { ProductListWidget } from '../../widgets/ItemList/ProductListWidget.jsx';

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));

export const getItemList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            [
                { id: 'pdt01', category: 'ctg01', name: 'mozzarella', price: '500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt02', category: 'ctg01', name: 'jamón y morrones', price: '500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt03', category: 'ctg01', name: 'napolitana', price: '500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt04', category: 'ctg01', name: 'cuatro quesos', price: '500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt05', category: 'ctg01', name: 'fugazzetta', price: '500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt06', category: 'ctg02', name: 'jamón y queso', price: '250', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt07', category: 'ctg02', name: 'atún', price: '250', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt08', category: 'ctg02', name: 'pollo', price: '250', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt09', category: 'ctg02', name: 'verduras', price: '250', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt10', category: 'ctg02', name: 'carne y huevo', price: '250', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt11', category: 'ctg03', name: 'carne suave', price: '125', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt12', category: 'ctg03', name: 'atún', price: '125', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt13', category: 'ctg03', name: 'humita', price: '125', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt14', category: 'ctg03', name: 'pollo', price: '125', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt15', category: 'ctg03', name: 'jamón y queso', price: '125', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt16', category: 'ctg04', name: 'gaseosa', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt17', category: 'ctg04', name: 'agua saborizada', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt18', category: 'ctg04', name: 'jugo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', price: '80'},
                { id: 'pdt19', category: 'ctg04', name: 'agua sin gas', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
                { id: 'pdt20', category: 'ctg04', name: 'cerveza', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
            ]
        ), 3000);
    })
}

export const ItemListContainer = () => {

    const classes = useStyles();

    return <div className={classes.container}>
        <ProductListWidget/>
    </div>
}