import React from 'react';
import './ProductCategory.css';
import { CategoryWidget } from '../../widgets/CategoryWidget/CategoryWidget.jsx';

export const ProductCategory = () => {

    return <div id="product-category">
        <CategoryWidget></CategoryWidget>
        <CategoryWidget></CategoryWidget>
        <CategoryWidget></CategoryWidget>
        <CategoryWidget></CategoryWidget>
    </div>
}