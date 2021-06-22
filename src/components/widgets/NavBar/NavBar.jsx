import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core'; /*importa los estilos de material*/
import { navBarStyle } from './NavBarStyles.js';
import { BrandWidget } from '../BrandWidget/BrandWidget.jsx';
import { CategoryWidget } from '../CategoryWidget/CategoryWidget.jsx';
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import { categories } from '../../../App.js';

const useStyles = makeStyles((theme) => navBarStyle(theme)); /*mete el makeStyle de material en una constante*/ 

export const NavBar = props => {

    const classes= useStyles(); /*trae la contante al export*/

    return <header className={classes.container}>
        <div id="header-brand-container">
            <BrandWidget/>
        </div>

        <div id="header-category-container">
        {categories.map((category, i) => <React.Fragment key={i}>
                <CategoryWidget name={category.name} icon={category.icon}/>
        </React.Fragment>)}
        </div>

        <div id="header-order-container">
            <CartWidget/>
        </div>
    </header>
}