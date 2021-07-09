/* eslint-disable */
import React, { createContext, useState, useEffect } from "react";

//creando el context:
export const CartContext = createContext();

//creando el provider:
export const CartContextProvider = ({ children }) => {
	const [order, setOrder] = useState([]);
	const [totalAmount, setTotalAmount] = useState(0);
	const [totalQuantity, setTotalQuantity] = useState(0);

	const addProductToOrder = (productToAdd) => {
		const filteredOrder = order.filter(
			(obj) => obj.product.id === productToAdd.product.id
		);
		return setOrder([...filteredOrder, productToAdd]);
	};

	const removeProductToOrder = (productToRemove) => {
		const filteredOrder = order.filter(
			(obj) => obj.product.id !== productToRemove.product.id
		);
		return setOrder(filteredOrder);
	};

	useEffect(() => {
		const amount = order.reduce((accumulator, currentValue) => {
			return (accumulator += currentValue.amount);
		}, 0);
		setTotalAmount(amount);
	}, [order]);

	useEffect(() => {
		const quantity = order.reduce((accumulator, currentValue) => {
			return (accumulator += currentValue.quantity);
		}, 0);
		setTotalQuantity(quantity);
	}, [order]);

	return (
		<CartContext.Provider
			value={{
				order,
				addProductToOrder,
				removeProductToOrder,
				totalAmount,
				totalQuantity,
			}}>
			{children}
		</CartContext.Provider>
	);
};

// useEffect(() => {
// 	console.log(orderRow);
// 	console.log(totalAmount);
// 	console.log(totalQuantity);
// }, [orderRow]);

// const addOrderRow = (newOrderRow) => {
// 	const productId = newOrderRow.product.pdtid;
// 	const filteredOrder = filterOrderRowByItemId(productId);
// 	orderRow.filter((row) => row.product.pdtid === productId).length === 0
// 		? setOrderRow([...orderRow, newOrderRow])
// 		: setOrderRow([...filteredOrder, newOrderRow]);
// };

// const removeOrderRow = (productId) => {
// 	const filteredOrder = filterOrderRowByItemId(productId);
// 	return setOrderRow(filteredOrder);
// };

//consigue un array con una lista de productos de la orden descartando el que recibió por parámetros:
// const filterOrderRowByItemId = (itemId) =>
// 	orderRow.filter((row) => row.product.id !== itemId);

//consigue un objeto con el producto que recibió por parámetros:
// const findOrderRowByItemId = (itemId) =>
// 	orderRow.find((row) => row.product.id === itemId);

//const resetNewOrderRow = () => setNewOrderRow(newOrderRowInitialState);
