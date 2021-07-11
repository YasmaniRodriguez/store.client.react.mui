/* eslint-disable */
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [order, setOrder] = useState([]);
	const [totalAmount, setTotalAmount] = useState(0);
	const [totalQuantity, setTotalQuantity] = useState(0);

	const addProductToOrder = (productToAdd) => {
		const filteredOrder = order.filter(
			(obj) => obj.product.id !== productToAdd.product.id
		);
		return setOrder([...filteredOrder, productToAdd]);
	};

	const removeProductToOrder = (productToRemove) => {
		const filteredOrder = order.filter(
			(obj) => obj.product.id !== productToRemove
		);
		return setOrder(filteredOrder);
	};

	const calcTotalAmount = () => {
		const myAmount = order.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.amount;
		}, 0);
		return myAmount;
	};

	const calcRowAmount = (quantity, price) => {
		return quantity * price;
	};

	const calcTotalQuantity = () => {
		const myQuantity = order.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.quantity;
		}, 0);
		return myQuantity;
	};

	useEffect(() => {
		async function getTotalAmount() {
			const amount = await calcTotalAmount();
			setTotalAmount(amount);
		}
		getTotalAmount();
	}, [order]);

	useEffect(() => {
		async function getTotalQuantity() {
			const quantity = await calcTotalQuantity();
			setTotalQuantity(quantity);
		}
		getTotalQuantity();
	}, [order]);

	useEffect(() => {
		console.log(order);
	}, [order]);

	return (
		<CartContext.Provider
			value={{
				order,
				addProductToOrder,
				removeProductToOrder,
				totalAmount,
				setTotalAmount,
				totalQuantity,
				setTotalQuantity,
				calcRowAmount,
			}}>
			{children}
		</CartContext.Provider>
	);
};
