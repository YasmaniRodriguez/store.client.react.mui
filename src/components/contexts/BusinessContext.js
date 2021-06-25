
import React, { createContext, useState } from 'react';

//creando el context:
export const BusinessContext = createContext();

//creando el provider:
export const BusinessContextProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const getCategories = arr => setCategories(arr);
    const getProducts = arr => setProducts(arr);

    return <BusinessContext.Provider value={{categories, products, getCategories, getProducts}}>
        {children}
    </BusinessContext.Provider>
};

// const [productsToShow, setProductsToShow] = useState([]);
// const {onlyShowCategory} = useParams('');
// const filterProducts = products => {
//     return onlyShowCategory !== '' ? products.filter(product => product.category === onlyShowCategory) :products;
// }

// useEffect(() => {
//     setProductsToShow(filterProducts());
// }, [onlyShowCategory])