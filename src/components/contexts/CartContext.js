import React, { createContext, useState, useEffect } from 'react';

//creando el context:
export const CartContext = createContext();

//creando el provider:
export const CartContextProvider = ({children}) => {

    const [orderRow, setOrderRow] = useState([]);

    useEffect(() => {
        console.log(orderRow);
    }, [orderRow])

    const addOrderRow = newOrderRow => setOrderRow([...orderRow, newOrderRow]);

    const removeOrderRow = (productId) => {
        const removedItem = findOrderRowByItemId(productId); 
        setOrderRow(orderRow.filter(row => row !== removedItem)) ;
    }

    const findOrderRowByItemId = productId => orderRow.find(row => row.product.id = productId);

    return <CartContext.Provider value={{ orderRow, addOrderRow, removeOrderRow }}>
        {children}
    </CartContext.Provider>
};
