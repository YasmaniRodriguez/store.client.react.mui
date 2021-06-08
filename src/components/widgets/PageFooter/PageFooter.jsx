import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget.jsx';
import './PageFooter.css';

export const PageFooter = () => {

    return <footer id="page-footer">
        <CartWidget/>
    </footer>
}