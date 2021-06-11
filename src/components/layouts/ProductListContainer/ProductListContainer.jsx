import React from 'react';
import './ProductListContainer.css';
import { ProductWidget } from '../../widgets/ProductWidget/ProductWidget.jsx';

export const ProductListContainer = () => {

    return <div id="product-catalog">
        <ProductWidget price="$200.00" description="pdt 001"/>
        <ProductWidget price="$200.00" description="pdt 002"/>
        <ProductWidget price="$200.00" description="pdt 003"/>
        <ProductWidget price="$200.00" description="pdt 004"/>
        <ProductWidget price="$200.00" description="pdt 005"/>

        <ProductWidget price="$300.00" description="pdt 006"/>
        <ProductWidget price="$300.00" description="pdt 007"/>
        <ProductWidget price="$300.00" description="pdt 008"/>
        <ProductWidget price="$300.00" description="pdt 009"/>
        <ProductWidget price="$300.00" description="pdt 010"/>

        <ProductWidget price="$400.00" description="pdt 011"/>
        <ProductWidget price="$400.00" description="pdt 012"/>
        <ProductWidget price="$400.00" description="pdt 013"/>
        <ProductWidget price="$400.00" description="pdt 014"/>
        <ProductWidget price="$400.00" description="pdt 015"/>

        <ProductWidget price="$500.00" description="pdt 016"/>
        <ProductWidget price="$500.00" description="pdt 017"/>
        <ProductWidget price="$500.00" description="pdt 018"/>
        <ProductWidget price="$500.00" description="pdt 019"/>
        <ProductWidget price="$500.00" description="pdt 020"/>
    </div>
}