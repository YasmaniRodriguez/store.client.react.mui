import React, { createContext, useState, useEffect } from 'react';

//creando el context:
export const CartContext = createContext();

//creando el provider:
export const CartContextProvider = ({children}) => {

    const [orderRow, setOrderRow] = useState([]);

    const addOrderRow = newOrderRow => setOrderRow([...orderRow, newOrderRow]);
    
    useEffect(() => {
        console.log(orderRow);
    }, [orderRow])

    const removeOrderRow = (arr, id) => {
        const item = arr.find(row => row.product.id === id); 
        setOrderRow(arr.filter(row => row !== item)) ;
    }

    return <CartContext.Provider value={{ orderRow, addOrderRow, removeOrderRow }}>
        {children}
    </CartContext.Provider>
};
