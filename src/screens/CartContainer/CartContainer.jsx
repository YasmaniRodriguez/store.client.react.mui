import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
	Button,
	Typography,
	makeStyles,
	CircularProgress,
} from "@material-ui/core";
import { db } from "../../firebase/firebase";
import firebase from "firebase/app";
import "@firebase/firestore";
import { CartContext } from "../../contexts/CartContext";
import { Cart } from "../../components/Cart/Cart";
import { CartContainerStyles } from "./CartContainerStyles";

const useStyles = makeStyles((theme) => CartContainerStyles(theme));

export const CartContainer = (props) => {
	const classes = useStyles();
	const history = useHistory();

	const {
		cart,
		order,
		setCart,
		buildNewOrder,
		setOrder,
		totalAmount,
		totalQuantity,
		buyer,
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
		<section className={classes.container}>
			{cart.length === 0 ? (
				order === "awaiting" ? (
					<article className={classes.messageContainer}>
						<CircularProgress />
						<Typography variant='h3' component='p'>
							Aguarde un momento por favor,
						</Typography>
						<Typography variant='h4' component='p'>
							Estamos enviando tu Orden al Proveedor...
						</Typography>
					</article>
				) : order === "" ? (
					<article className={classes.messageContainer}>
						<Typography variant='h4' component='p'>
							No agregaste productos a la carrito aún.
						</Typography>
						<Button
							variant='outlined'
							onClick={(e) => {
								history.push(`/`);
							}}>
							Ok, vamos de compras
						</Button>
					</article>
				) : (
					<article className={classes.messageContainer}>
						<Typography variant='h3' component='p'>
							Tu Orden ha sido aprobada!
						</Typography>

						<Typography variant='h5' component='p'>
							Podés hacerle seguimiento con el código:
						</Typography>
						<Typography variant='h5' component='h5'>
							{order}
						</Typography>
						<Button
							variant='outlined'
							onClick={(e) => {
								setOrder("");
								history.push(`/`);
							}}>
							Quiero hacer otro pedido
						</Button>
					</article>
				)
			) : (
				<Cart
					sendOrderToProvider={sendOrderToProvider}
					totalAmount={totalAmount}
					totalQuantity={totalQuantity}
					cart={cart}
					buyer={buyer}
					changeBuyerName={changeBuyerName}
					changeBuyerPhone={changeBuyerPhone}
					changeBuyerEmail={changeBuyerEmail}
				/>
			)}
		</section>
	);
};
