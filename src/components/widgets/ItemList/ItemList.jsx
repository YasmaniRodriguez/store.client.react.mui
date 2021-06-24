import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { Item } from '../Item/Item.jsx';
import { BusinessContext, BusinessContextProvider } from '../../screens/ItemListContainer/ItemListContainer.jsx';

export const ItemList = props => {

    const productsToShow = useContext(BusinessContext);
    
    return <BusinessContextProvider>
        <Grid container spacing={24} justify="center">
            {
                productsToShow.map((product, i) =>
                <React.Fragment key={i}>
                    <Item index={i} {...product}/>
                </React.Fragment>)
            }
        </Grid>        
    </BusinessContextProvider>
}