import React from 'react';
import './PageHeader.css';
import { StoreWidget } from '../../widgets/StoreWidget/StoreWidget.jsx';
import { SearcherWidget } from '../../widgets/SearchWidget/SearcherWidget.jsx';
import { DiscountWidget } from '../../widgets/DiscountWidget/DiscountWidget.jsx';

export const PageHeader = () => {

    return <header id="page-header">
        <StoreWidget/>
        <SearcherWidget/>
        <DiscountWidget/>
    </header>
}