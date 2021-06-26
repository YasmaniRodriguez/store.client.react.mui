import React from 'react';
import { Grid } from '@material-ui/core';
import { Item } from '../Item/Item.jsx';

export const ItemList = ({products}) => {
    
    return <Grid container spacing={10} justify="center">
        {
            products.map((product, i) =>
            <React.Fragment key={i}>
                <Item index={i} {...product}/>
            </React.Fragment>)
        }
    </Grid>        
}