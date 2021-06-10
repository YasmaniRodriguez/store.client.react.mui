import React from 'react';
import './CategoryWidget.css';

export const CategoryWidget = props => {

    return <div className='category-container'>
        <p>{props.name}</p>
    </div>
}