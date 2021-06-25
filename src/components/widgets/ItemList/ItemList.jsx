import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { Item } from '../Item/Item.jsx';
import { BusinessContextProvider } from '../../contexts/BusinessContext';

export const ItemList = props => {

    const {products} = useContext(BusinessContextProvider);

    console.log(products);
    
    return <BusinessContextProvider>
        <Grid container spacing={24} justify="center">
            {
                products.map((product, i) =>
                <React.Fragment key={i}>
                    <Item index={i} {...product}/>
                </React.Fragment>)
            }
        </Grid>        
    </BusinessContextProvider>
}