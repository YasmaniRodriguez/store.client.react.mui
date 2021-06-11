import React from 'react';
import './ProductWidget.css';

export const ProductWidget = ({price, description}) => {

    return <div className='product-card-container'>
        <div className='product-galery'></div>
        <div className='product-description'>
            <p>{price}</p>
            <p>{description}</p>
        </div>
        <div className='product-purchase'>
            <div className='product-quantity'>
                <div className='pdt-qty-value'>
                    <p className='qty-value'>0</p>
                </div>
                <div className='pdt-qty-action'>
                    <div className='qty-action qty-more-cta'><span></span></div>
                    <div className='qty-action qty-less-cta'><span></span></div>
                </div>
            </div>
            <div className='product-add-cta'>
                <p>Agregar a la Orden</p>
            </div>
        </div>
    </div>
}