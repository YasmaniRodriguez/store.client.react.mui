import React from 'react';
import './CategoryListContainer.css';
import { CategoryWidget } from '../../widgets/CategoryWidget/CategoryWidget.jsx';

export const CategoryListContainer = () => {

    return <div id="product-category">
        <CategoryWidget name="ctg 100"/>
        <CategoryWidget name="ctg 200"/>
        <CategoryWidget name="ctg 300"/>
        <CategoryWidget name="ctg 400"/>
    </div>
}