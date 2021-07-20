import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Paper, Typography, makeStyles } from "@material-ui/core";
import { CounterWidget } from "../CounterWidget/CounterWidget";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "90vh",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	detailImage: {
		height: "100%",
		width: "100%",
		display: "flex",
		alignItems: "center",

		"& img": {
			height: "400px",
			width: "400px",
		},
	},
	detailContent: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	detailCallToAction: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));

export const ItemDetail = ({
	selectedProduct,
	quantity,
	addItemToCart,
	setQuantity,
	showCheckOut,
	setShowCheckOut,
	calcRowAmount,
}) => {
	const classes = useStyles();
	const history = useHistory();
	const { image, name, price, description, stock } = selectedProduct;

	const itemToAdd = {
		product: selectedProduct,
		quantity: quantity,
		amount: calcRowAmount(quantity, price),
	};

	return (
		<div className={classes.container}>
			<Paper className={classes.detailImage} elevation={0}>
				<img src={image} alt={name}></img>
			</Paper>
			<div className={classes.detailContent}>
				<div className={classes.detailContent}>
					<Typography
						variant='h1'
						component='p'
						style={{ textTransform: "capitalize" }}>
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
		</div>
	);
};
