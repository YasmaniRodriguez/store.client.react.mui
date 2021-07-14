/* eslint-disable */
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [order, setOrder] = useState("");
	const [totalAmount, setTotalAmount] = useState(0);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });

	const addItemToCart = (itemToAdd) => {
		const filteredCart = cart.filter(
			(obj) => obj.product.id !== itemToAdd.product.id
		);
		return setCart([...filteredCart, itemToAdd]);
	};

	const removeItemToCart = (itemToRemove) => {
		const filteredCart = cart.filter((obj) => obj.product.id !== itemToRemove);
		return setCart(filteredCart);
	};

	const calcTotalAmount = () => {
		const myAmount = cart.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.amount;
		}, 0);
		return myAmount;
	};

	const calcRowAmount = (quantity, price) => {
		return quantity * price;
	};

	const calcTotalQuantity = () => {
		const myQuantity = cart.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.quantity;
		}, 0);
		return myQuantity;
	};

	const buildNewOrder = () => {
		return {
			buyer: buyer,
			products: cart,
			totalAmount: totalAmount,
			totalQuantity: totalQuantity,
		};
	};

	useEffect(() => {
		async function getTotalAmount() {
			const amount = await calcTotalAmount();
			setTotalAmount(amount);
		}
		getTotalAmount();
	}, [cart]);

	useEffect(() => {
		async function getTotalQuantity() {
			const quantity = await calcTotalQuantity();
			setTotalQuantity(quantity);
		}
		getTotalQuantity();
	}, [cart]);

	useEffect(() => {
		console.log(order);
	}, [order]);

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addItemToCart,
				removeItemToCart,
				totalAmount,
				setTotalAmount,
				totalQuantity,
				setTotalQuantity,
				calcRowAmount,
				buyer,
				setBuyer,
				buildNewOrder,
				order,
				setOrder,
			}}>
			{children}
		</CartContext.Provider>
	);
};
