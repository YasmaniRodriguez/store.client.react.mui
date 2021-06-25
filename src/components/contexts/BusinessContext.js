import React, { createContext, useState, useEffect } from 'react';

//creando el context:
export const BusinessContext = createContext();

//creando el provider:
export const BusinessContextProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [productsToShow, setProductsToShow] = useState([]);

    const getCategories = arr => setCategories(arr);
    const getProducts = arr => setProducts(arr);

    return <BusinessContext.Provider value={{categories, products, getCategories, getProducts, productsToShow, setProductsToShow}}>
        {children}
    </BusinessContext.Provider>
};
