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

    return <CartContext.Provider value={{ orderRow, addOrderRow }}>
        {children}
    </CartContext.Provider>
};
