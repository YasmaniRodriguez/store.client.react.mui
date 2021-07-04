/* eslint-disable */
import React, { createContext, useState, useEffect } from "react";

//creando el context:
export const CartContext = createContext();

//creando el provider:
export const CartContextProvider = ({ children }) => {
	const [orderRow, setOrderRow] = useState([]);

	useEffect(() => {
		console.log(orderRow);
	}, [orderRow]);

	const addOrderRow = (newOrderRow) => {
		const productId = newOrderRow.product.id;
		const filteredOrder = filterOrderRowByItemId(productId);
		orderRow.filter((row) => row.product.id === productId).length === 0
			? setOrderRow([...orderRow, newOrderRow])
			: setOrderRow([...filteredOrder, newOrderRow]);
	};

	const removeOrderRow = (productId) => {
		const filteredOrder = filterOrderRowByItemId(productId);
		return setOrderRow(filteredOrder);
	};

	//consigue un array con una lista de productos de la orden descartando el que recibió por parámetros:
	const filterOrderRowByItemId = (itemId) =>
		orderRow.filter((row) => row.product.id !== itemId);

	//consigue un objeto con el producto que recibió por parámetros:
	const findOrderRowByItemId = (itemId) =>
		orderRow.find((row) => row.product.id === itemId);

	return (
		<CartContext.Provider value={{ orderRow, addOrderRow, removeOrderRow }}>
			{children}
		</CartContext.Provider>
	);
};
