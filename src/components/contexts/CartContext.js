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
		orderRow.filter((row) => row.product.id === productId).length === 0
			? setOrderRow([...orderRow, newOrderRow])
			: (removeOrderRow(productId), setOrderRow([...orderRow, newOrderRow]));
	};

	async function removeOrderRow(productId) {
		const removedItem = await findOrderRowByItemId(productId);
		return setOrderRow(orderRow.filter((row) => row !== removedItem));
	}

	const findOrderRowByItemId = (productId) =>
		orderRow.find((row) => (row.product.id = productId));

	return (
		<CartContext.Provider value={{ orderRow, addOrderRow, removeOrderRow }}>
			{children}
		</CartContext.Provider>
	);
};
