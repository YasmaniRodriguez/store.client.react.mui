import React from 'react';
import './PageHeader.css';
import MenuIcon from '@material-ui/icons/Menu';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export const PageHeader = () => {

    return <header id="page-header">
        <div className="cta" id="store-view-cta">
            <MenuIcon/>
        </div>
        <div id="brand-container">
            <p>Yeah!</p>
            <p>Pizzas, Tartas & Empanadas</p>
        </div>
        <div className="cta" id="discount-view-cta">
            <LocalOfferIcon/>
        </div>
    </header>
}