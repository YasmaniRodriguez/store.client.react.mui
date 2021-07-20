import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
	Button,
	Card,
	CardMedia,
	CardContent,
	Typography,
	makeStyles,
} from "@material-ui/core";
import { CartContext } from "../../contexts/CartContext.js";

const useStyles = makeStyles((theme) => ({
	container: {
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		//fontFamily: theme.typography.fontFamily.Ranchers,
	},
	media: {
		height: "10em",
		cursor: "pointer",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	product: {
		textTransform: "uppercase",
		//fontFamily: "Ranchers",
	},
	price: {
		padding: "10px 0px",
		//fontFamily: "Ranchers",
	},
	button: {
		borderColor: theme.palette.success.light,
		color: theme.palette.success.light,
		textTransform: "none",
		borderRadius: 50,
		//fontFamily: "Ranchers",
	},
}));

export const Item = ({ ...product }) => {
	const classes = useStyles();
	const history = useHistory();
	const { addItemToCart, calcRowAmount } = useContext(CartContext);

	const itemToAdd = {
		product: product,
		quantity: 1,
		amount: calcRowAmount(1, product.price),
	};

	return (
		<Card className={classes.container}>
			<CardMedia
				className={classes.media}
				image={product.image}
				style={{ backgroundSize: "contain" }}
				onClick={() => history.push(`/product/${product.id}`)}
			/>
			<CardContent className={classes.content}>
				<Typography className={classes.product} variant='h6'>
					{product.name}
				</Typography>
				<Typography
					className={classes.price}>{`$ ${product.price}`}</Typography>
				<Button onClick={(e) => addItemToCart(itemToAdd)} variant='outlined'>
					Agregar al carrito
				</Button>
			</CardContent>
		</Card>
	);
};
