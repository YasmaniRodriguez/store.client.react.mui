import React from 'react';
import { CategoryListContainer } from '../CategoryListContainer/CategoryListContainer.jsx';
import { ProductListContainer } from '../ProductListContainer/ProductListContainer.jsx';
import { CounterWidget } from '../../widgets/CounterWidget/CounterWidget.jsx';

export const PageContent = () => {

    return <div id="page-content">
        <CounterWidget/>
    </div>
}