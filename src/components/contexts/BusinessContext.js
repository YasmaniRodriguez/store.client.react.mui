import React, { createContext, useState } from 'react';

//creando el context:
export const BusinessContext = createContext();

//creando el provider:
export const BusinessContextProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    return <BusinessContext.Provider value={{ categories, setCategories, products, setProducts }}>
        {children}
    </BusinessContext.Provider>
};
