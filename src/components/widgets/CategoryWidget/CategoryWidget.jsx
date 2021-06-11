import React from 'react';
import './CategoryWidget.css';

export const CategoryWidget = ({name}) => {

    return <div className='category-container'>
        <p>{name}</p>
    </div>
}