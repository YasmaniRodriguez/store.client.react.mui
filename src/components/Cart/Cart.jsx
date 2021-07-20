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
	Grid,
	Avatar,
	IconButton,
	Button,
	useMediaQuery,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { BusinessContext } from "../../contexts/BusinessContext";
import { CartContext } from "../../contexts/CartContext";
import { db } from "../../firebase/firebase";
import firebase from "firebase/app";
import "@firebase/firestore";

const useStyles = makeStyles((theme) => ({
	container: {},
	list: {
		display: "flex",
		width: "50%",
	},
	summary: {
		display: "flex",
		flexDirection: "column",
		width: "50%",
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

	const matchesMobile = useMediaQuery("(max-width: 991px)");

	const buyerNameChange = (e) => {
		setBuyer({
			name: e.target.value,
			phone: buyer.phone,
			email: buyer.email,
		});
	};

	const buyerPhoneChange = (e) => {
		setBuyer({
			name: buyer.name,
			phone: e.target.value,
			email: buyer.email,
		});
	};

	const buyerEmailChange = (e) => {
		setBuyer({
			name: buyer.name,
			phone: buyer.phone,
			email: e.target.value,
		});
	};

	const sendOrder = () => {
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
		<article
			style={
				matchesMobile
					? { display: "flex", flexDirection: "column" }
					: { display: "flex" }
			}>
			<div className={classes.list}>
				<CartList cart={cart} />
			</div>
			<div className={classes.summary}>
				<CartSummary
					amount={totalAmount}
					quantity={totalQuantity}
					buyer={buyer}
					setBuyerName={buyerNameChange}
					setBuyerPhone={buyerPhoneChange}
					setBuyerEmail={buyerEmailChange}
				/>
				<Button
					disabled={buyer.name === "" || buyer.phone === ""}
					variant='outlined'
					style={{ width: "40%", alignSelf: "center" }}
					onClick={(e) => sendOrder()}>
					Enviar orden
				</Button>
			</div>
		</article>
	);
};

const CartList = ({ cart }) => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
				<List>
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
			</Grid>
		</Grid>
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
		setMyQuantity(parseInt(e.target.value));
	};

	useEffect(() => {
		setMyAmount(calcRowAmount(myQuantity, myPrice));
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
	}, [myQuantity]);

	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar src={whereIsMyIcon(product.category)} />
			</ListItemAvatar>
			<ListItemText primary={product.name} secondary={"$" + product.price} />
			<TextField
				id='row-qty'
				type='number'
				value={myQuantity}
				onChange={quantityChange}></TextField>
			<Typography variant='h6' component='p'>
				{"$" + myAmount}
			</Typography>
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
		</ListItem>
	);
};

const CartSummary = ({
	amount,
	quantity,
	buyer,
	setBuyerName,
	setBuyerPhone,
	setBuyerEmail,
}) => {
	const inputCommonStyle = {
		padding: "20px 0px",
	};
	return (
		<div>
			<div>
				<Typography
					variant='h6'
					component='p'
					style={{ textTransform: "uppercase" }}>
					resumen
				</Typography>
				<div>
					<Typography
						variant='h6'
						component='p'
						style={{ padding: "0px 10px" }}>
						Cantidad de Productos: {quantity} Uni.
					</Typography>
					<Typography
						variant='h6'
						component='p'
						style={{ padding: "0px 10px" }}>
						Monto Total: ${amount}
					</Typography>
				</div>
			</div>
			<div style={{ padding: "10px 0px" }}>
				<Typography
					variant='h6'
					component='p'
					style={{ textTransform: "uppercase" }}>
					datos del comprador
				</Typography>
				<div
					style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
					<TextField
						required
						id='buyerName'
						label='Nombre'
						variant='outlined'
						type='text'
						placeholder='Juan Pérez'
						value={buyer.name}
						style={inputCommonStyle}
						onChange={setBuyerName}
					/>
					<TextField
						required
						id='buyerPhone'
						label='Teléfono'
						variant='outlined'
						type='tel'
						placeholder='+54 911 1234-5678'
						value={buyer.phone}
						style={inputCommonStyle}
						onChange={setBuyerPhone}
					/>
					<TextField
						id='buyerEmail'
						label='E-mail'
						variant='outlined'
						type='email'
						placeholder='juanperez@gmail.com'
						value={buyer.email}
						style={inputCommonStyle}
						onChange={setBuyerEmail}
					/>
				</div>
			</div>
		</div>
	);
};
