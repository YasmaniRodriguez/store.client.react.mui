import React from 'react';

export const BrandWidget = props => {

    const {brand, slogan} = props;
    
    return <div id="my-brand">
        <h1>{brand}</h1>
        <h3>{slogan}</h3>
    </div>
}