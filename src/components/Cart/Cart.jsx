import React, { useState, useContext, useEffect, Fragment } from "react";
import {
	makeStyles,
	Typography,
	TextField,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	List,
	Avatar,
	IconButton,
	Button,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { BusinessContext } from "../../contexts/BusinessContext";
import { CartContext } from "../../contexts/CartContext";
import { db } from "../../firebase/firebase";
import firebase from "firebase/app";
import "@firebase/firestore";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		display: "grid",
		gap: "1rem",
		gridTemplateColumns: "repeat(auto-fit, minmax(30rem, 1fr))",
	},
	list: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "20px 20px",
		backgroundColor: "rgb(249 248 248)",
	},
	summary: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
}));

export const Cart = () => {
	const classes = useStyles();
	const {
		cart,
		setCart,
		totalAmount,
		totalQuantity,
		buyer,
		setBuyer,
		buildNewOrder,
		setOrder,
	} = useContext(CartContext);

	const changeBuyerName = (e) => {
		setBuyer({
			name: e.target.value,
			phone: buyer.phone,
			email: buyer.email,
		});
	};

	const changeBuyerPhone = (e) => {
		setBuyer({
			name: buyer.name,
			phone: e.target.value,
			email: buyer.email,
		});
	};

	const changeBuyerEmail = (e) => {
		setBuyer({
			name: buyer.name,
			phone: buyer.phone,
			email: e.target.value,
		});
	};

	const sendOrderToProvider = () => {
		setOrder("awaiting");
		const query = db.collection("orders");

		query
			.add(buildNewOrder())
			.then(({ id }) => {
				updateStock();
				setOrder(id);
			})
			.finally(setCart([]));
	};

	async function updateStock() {
		const itemsToUpdate = db.collection("products").where(
			firebase.firestore.FieldPath.documentId(),
			"in",
			cart.map((i) => i.product.id)
		);

		const query = await itemsToUpdate.get();
		const batch = db.batch();
		query.docs.forEach((docSnapshot, idx) => {
			batch.update(docSnapshot.ref, {
				stock: docSnapshot.data().stock - cart[idx].quantity,
			});
		});
		batch.commit();
	}

	return (
		<article className={classes.container}>
			<div className={classes.list}>
				<Typography variant='h5' style={{ textTransform: "uppercase" }}>
					lista de pedidos
				</Typography>
				<CartList cart={cart} />
			</div>
			<div className={classes.summary}>
				<div style={{ height: "65%" }}>
					<CartSummary
						amount={totalAmount}
						quantity={totalQuantity}
						buyer={buyer}
						changeBuyerName={changeBuyerName}
						changeBuyerPhone={changeBuyerPhone}
						changeBuyerEmail={changeBuyerEmail}
					/>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "33%",
						backgroundColor: "rgb(249 248 248)",
					}}>
					<Button
						disabled={buyer.name === "" || buyer.phone === ""}
						variant='outlined'
						style={{
							width: "30%",
							alignSelf: "center",
						}}
						onClick={(e) => sendOrderToProvider()}>
						Enviar orden
					</Button>
				</div>
			</div>
		</article>
	);
};

const CartList = ({ cart }) => {
	return (
		<List style={{ width: "100%" }}>
			{cart
				.sort((a, b) => {
					if (a.product.name > b.product.name) {
						return 1;
					}
					if (a.product.name < b.product.name) {
						return -1;
					}
					return 0;
				})
				.map((row, i) => (
					<Fragment key={i}>
						<CartItem index={i} {...row} />
					</Fragment>
				))}
		</List>
	);
};

const CartItem = (props) => {
	const { addItemToCart, removeItemToCart, calcRowAmount } =
		useContext(CartContext);
	const { whereIsMyIcon } = useContext(BusinessContext);
	const { product, quantity, amount } = props;
	const myPrice = product.price;

	const [myQuantity, setMyQuantity] = useState(quantity);
	const [myAmount, setMyAmount] = useState(amount);

	const quantityChange = (e) => {
		const minQty = 1;
		const maxQty = product.stock;
		const curQty = parseInt(e.target.value);
		if (curQty <= minQty) {
			setMyQuantity(minQty);
		} else if (curQty >= maxQty) {
			setMyQuantity(maxQty);
		} else {
			setMyQuantity(curQty);
		}
	};

	useEffect(() => {
		setMyAmount(calcRowAmount(myQuantity, myPrice));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [myQuantity]);

	useEffect(() => {
		async function getItemToAdd() {
			const newAmount = await calcRowAmount(myQuantity, myPrice);
			const itemToAdd = {
				product: product,
				quantity: myQuantity,
				amount: newAmount,
			};
			addItemToCart(itemToAdd);
		}
		getItemToAdd();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [myQuantity]);

	return (
		<ListItem
			style={{
				display: "flex",
				justifyContent: "space-between",
				margin: "5px 0px",
			}}>
			<div style={{ display: "flex", width: "70%" }}>
				<ListItemAvatar>
					<Avatar src={whereIsMyIcon(product.category)} />
				</ListItemAvatar>
				<ListItemText
					style={{ textTransform: "capitalize" }}
					primary={product.name}
					secondary={"$" + product.price}
				/>
			</div>

			<div style={{ display: "block", width: "20%" }}>
				<TextField
					id='row-qty'
					type='number'
					value={myQuantity}
					onChange={quantityChange}></TextField>

				<Typography variant='h6' component='p'>
					{"$" + myAmount}
				</Typography>
			</div>
			<div style={{ display: "block", width: "10%" }}>
				<ListItemSecondaryAction>
					<IconButton
						edge='end'
						aria-label='delete'
						onClick={(e) => {
							removeItemToCart(product.id);
						}}>
						<Delete />
					</IconButton>
				</ListItemSecondaryAction>
			</div>
		</ListItem>
	);
};

const CartSummary = ({
	amount,
	quantity,
	buyer,
	changeBuyerName,
	changeBuyerPhone,
	changeBuyerEmail,
}) => {
	return (
		<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
			<div
				style={{
					backgroundColor: "rgb(249 248 248)",
					marginBottom: "20px",
					height: "33%",
					padding: "20px",
				}}>
				<Typography variant='h5' style={{ textTransform: "uppercase" }}>
					resumen de la compra
				</Typography>
				<div>
					<Typography variant='h6' component='p'>
						Cantidad de Productos: {quantity} Uni.
					</Typography>
					<Typography variant='h6' component='p'>
						Monto Total: ${amount}
					</Typography>
				</div>
			</div>
			<div
				style={{
					backgroundColor: "rgb(249 248 248)",
					height: "65%",
					padding: "20px",
				}}>
				<Typography variant='h5' style={{ textTransform: "uppercase" }}>
					datos del comprador
				</Typography>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "14em",
						justifyContent: "space-around",
					}}>
					<TextField
						required
						id='buyerName'
						label='Nombre'
						variant='outlined'
						type='text'
						placeholder='Juan Pérez'
						value={buyer.name}
						onChange={changeBuyerName}
					/>
					<TextField
						required
						id='buyerPhone'
						label='Teléfono'
						variant='outlined'
						type='tel'
						placeholder='+54 911 1234-5678'
						value={buyer.phone}
						onChange={changeBuyerPhone}
					/>
					<TextField
						id='buyerEmail'
						label='E-mail'
						variant='outlined'
						type='email'
						placeholder='juanperez@gmail.com'
						value={buyer.email}
						onChange={changeBuyerEmail}
					/>
				</div>
			</div>
		</div>
	);
};
