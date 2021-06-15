import React from 'react';
import { ProductCategory } from '../ProductCategory/ProductCategory.jsx';
import { ProductCatalog } from '../ProductCatalog/ProductCatalog.jsx';
import { CounterWidget } from '../../widgets/CounterWidget/CounterWidget.jsx';

export const PageContent = () => {

    return <div id="page-content">
        <ProductCategory/>
        <ProductCatalog/>
    </div>
}