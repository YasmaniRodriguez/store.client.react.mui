import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Paper, Typography, makeStyles } from "@material-ui/core";
import { ItemCount } from "../ItemCount/ItemCount.jsx";

export const ItemDetail = (props) => {
	const classes = useStyles();
	const history = useHistory();

	const { image, name, price, description, stock } = props.selectedProduct;
	const quantity = props.quantity;
	const setQuantity = props.setQuantity;
	const showCheckOut = props.showCheckOut;
	const setShowCheckOut = props.setShowCheckOut;

	return (
		<div className={classes.container}>
			<Paper elevation={0}>
				<img src={image} alt={name}></img>
			</Paper>
			<div>
				<div className={classes.detailContent}>
					<Typography variant='h1' component='p'>
						{name}
					</Typography>
					<Typography variant='h3' component='p'>
						{price}
					</Typography>
					<Typography variant='h5' component='p'>
						{description}
					</Typography>
				</div>
				<div className={classes.detailCallToAction}>
					{!showCheckOut ? (
						<>
							<ItemCount
								minQty={1}
								maxQty={stock}
								qty={quantity}
								setQty={setQuantity}
							/>
							<Button onClick={(e) => {}} variant='outlined'>
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

const useStyles = makeStyles((theme) => ({
	container: {
		height: "90vh",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	detailContent: {},
	detailCallToAction: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));
