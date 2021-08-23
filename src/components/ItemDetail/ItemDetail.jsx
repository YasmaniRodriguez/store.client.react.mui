import React from "react";
import { useHistory } from "react-router-dom";
import {
	Button,
	Typography,
	makeStyles,
	useMediaQuery,
} from "@material-ui/core";
import { CounterWidget } from "../CounterWidget/CounterWidget";
import { ItemDetailStyles } from "./ItemDetailStyles";

const useStyles = makeStyles((theme) => ItemDetailStyles(theme));

export const ItemDetail = ({
	selectedProduct,
	quantity,
	addItemToCart,
	setQuantity,
	showCheckOut,
	setShowCheckOut,
	calcRowAmount,
}) => {
	const matchesMobile = useMediaQuery("(max-width: 991px)");
	const classes = useStyles();
	const history = useHistory();
	const { image, name, price, description, stock } = selectedProduct;

	const itemToAdd = {
		product: selectedProduct,
		quantity: quantity,
		amount: calcRowAmount(quantity, price),
	};

	return (
		<article
			style={
				matchesMobile ? { flexDirection: "column" } : { flexDirection: "row" }
			}
			className={classes.container}>
			<div className={classes.detailImage}>
				<img src={image} alt={name}></img>
			</div>
			<div className={classes.detailContent}>
				<div className={classes.detailContent}>
					<Typography variant='h1' component='h3'>
						{name}
					</Typography>
					<Typography variant='h3' component='p'>
						$ {price}
					</Typography>
					<Typography variant='h5' component='p'>
						{description}
					</Typography>
				</div>
				<div className={classes.detailCallToAction}>
					{!showCheckOut ? (
						<>
							<CounterWidget
								minQty={1}
								maxQty={stock}
								qty={quantity}
								setQty={setQuantity}
							/>
							<Button
								onClick={(e) => {
									setShowCheckOut(true);
									addItemToCart(itemToAdd);
								}}
								variant='outlined'>
								Agregar al carrito
							</Button>
						</>
					) : (
						<>
							<Button onClick={() => history.push(`/cart`)} variant='outlined'>
								Finalizar mi compra
							</Button>
							<Button
								onClick={(e) => {
									setShowCheckOut(false);
									history.push(`/`);
								}}>
								Seguir comprando
							</Button>
						</>
					)}
				</div>
			</div>
		</article>
	);
};
