import React, { createContext, useState } from 'react';

//creando el context:
export const BusinessContext = createContext();

//creando el provider:
export const BusinessContextProvider = ({children}) => {

    const [availableCategories, setAvailableCategories] = useState([]);
    const [availableProducts, setAvailableProducts] = useState([]);

    return <BusinessContext.Provider value={{ availableCategories, setAvailableCategories, availableProducts, setAvailableProducts }}>
        {children}
    </BusinessContext.Provider>
};
