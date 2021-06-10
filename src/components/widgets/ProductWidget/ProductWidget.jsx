import React from 'react';
import './ProductWidget.css';

export const ProductWidget = props => {

    return <div className='product-container'>
        <p>{props.name}</p>
    </div>
}