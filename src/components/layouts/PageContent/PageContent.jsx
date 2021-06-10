import React from 'react';
import './PageContent.css';
import { ProductCategory } from '../ProductCategory/ProductCategory.jsx';
import { ProductCatalog } from '../ProductCatalog/ProductCatalog.jsx';

export const PageContent = () => {

    return <div id="page-content">
        <ProductCategory></ProductCategory>
        <ProductCatalog></ProductCatalog>
    </div>
}