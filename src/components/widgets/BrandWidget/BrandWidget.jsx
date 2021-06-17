import React from 'react';

export const BrandWidget = props => {

    const {brand} = props;
    
    return <div id="brand">
        <h2>{brand}</h2>
    </div>
}