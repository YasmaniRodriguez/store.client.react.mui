import React from 'react';
import './PageHeader.css';
import MenuIcon from '@material-ui/icons/Menu';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { SearcherWidget } from '../../widgets/SearchWidget/SearcherWidget.jsx';

export const PageHeader = () => {

    return <header id="page-header">
        <div className="cta" id="store-view-cta">
            <MenuIcon/>
        </div>
        <SearcherWidget></SearcherWidget>
        <div className="cta" id="discount-view-cta">
            <LocalOfferIcon/>
        </div>
    </header>
}