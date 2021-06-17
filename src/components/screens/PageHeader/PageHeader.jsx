import React from 'react';
import { makeStyles } from '@material-ui/core'; /*importa los estilos de material*/
import { pageHeaderStyle } from './PageHeaderStyles.jsx';
import { StoreWidget } from '../../widgets/StoreWidget/StoreWidget.jsx';
import { BrandWidget } from '../../widgets/BrandWidget/BrandWidget.jsx';
import { DiscountWidget } from '../../widgets/DiscountWidget/DiscountWidget.jsx';

const useStyles = makeStyles((theme) => pageHeaderStyle(theme)); /*mete el makeStyle de material en una constante*/ 

export const PageHeader = () => {

    const classes= useStyles(); /*trae la contante al export*/

    return <header className={classes.pageHeader}>
        <StoreWidget/>
        <BrandWidget brand="Yeah!" slogan="Pizzas, Taras & Empanadas"/>
        <DiscountWidget/>
    </header>
}