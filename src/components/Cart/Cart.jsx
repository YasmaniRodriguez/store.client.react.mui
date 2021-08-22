import React, { useContext } from "react";
import {
	makeStyles,
	Typography,
	TextField,
	List,
	Button,
} from "@material-ui/core";
import { CartItem } from "../CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { db } from "../../firebase/firebase";
import firebase from "firebase/app";
import "@firebase/firestore";
import { CartStyles } from "./CartStyles";

const useStyles = makeStyles((theme) => CartStyles(theme));

export const Cart = () => {
	const classes = useStyles();
	const {
		cart,
		setCart,
		totalAmount,
		totalQuantity,
		buyer,
		buildNewOrder,
		setOrder,
		changeBuyerName,
		changeBuyerPhone,
		changeBuyerEmail,
	} = useContext(CartContext);

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
				<Typography
					variant='h5'
					style={{ textTransform: "uppercase", fontFamily: "Ranchers" }}>
					lista de pedidos
				</Typography>
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
							<CartItem key={i} {...row} />
						))}
				</List>
			</div>

			<div className={classes.summary}>
				<div style={{ height: "65%" }}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							height: "100%",
						}}>
						<div
							style={{
								backgroundColor: "white",
								marginBottom: "20px",
								height: "33%",
								padding: "20px",
							}}>
							<Typography
								variant='h5'
								style={{ textTransform: "uppercase", fontFamily: "Ranchers" }}>
								resumen de la compra
							</Typography>
							<div>
								<Typography
									variant='h6'
									component='p'
									style={{ fontFamily: "Ranchers" }}>
									Cantidad de Productos: {totalQuantity} Uni.
								</Typography>
								<Typography
									variant='h6'
									component='p'
									style={{ fontFamily: "Ranchers" }}>
									Monto Total: ${totalAmount}
								</Typography>
							</div>
						</div>
						<div
							style={{
								backgroundColor: "white",
								height: "65%",
								padding: "20px",
							}}>
							<Typography
								variant='h5'
								style={{ textTransform: "uppercase", fontFamily: "Ranchers" }}>
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
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "33%",
						backgroundColor: "white",
					}}>
					<Button
						disabled={
							buyer.name === "" || buyer.phone === "" || buyer.email === ""
						}
						variant='outlined'
						style={{
							width: "30%",
							alignSelf: "center",
							backgroundColor: "rgb(249 248 248)",
							fontFamily: "Ranchers",
						}}
						onClick={(e) => sendOrderToProvider()}>
						Enviar orden
					</Button>
				</div>
			</div>
		</article>
	);
};
