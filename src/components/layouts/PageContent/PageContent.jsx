import React from 'react';
import { CategoryListContainer } from '../CategoryListContainer/CategoryListContainer.jsx';
import { ProductListContainer } from '../ProductListContainer/ProductListContainer.jsx';

export const PageContent = () => {

    return <div id="page-content">
        <CategoryListContainer />
        <ProductListContainer />
    </div>
}