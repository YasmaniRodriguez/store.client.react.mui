import React from "react";
import { useHistory } from "react-router-dom";
import {
	Button,
	Card,
	CardMedia,
	CardContent,
	Typography,
	makeStyles,
} from "@material-ui/core";

export const Item = ({ pdtid, name, price, image }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Card className={classes.container}>
			<CardMedia
				className={classes.media}
				image={image}
				style={{ backgroundSize: "contain" }}
				onClick={() => history.push(`/product/${pdtid}`)}
			/>
			<CardContent className={classes.content}>
				<Typography className={classes.product} variant='h6'>
					{name}
				</Typography>
				<Typography className={classes.price}>{price}</Typography>
				<Button
					className={classes.button}
					size='medium'
					variant='outlined'
					fontFamily='Ranchers'>
					Agregar al carrito
				</Button>
			</CardContent>
		</Card>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		width: "25em",
		height: "30em",
		margin: "1em",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		fontFamily: theme.typography.fontFamily.Ranchers,
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
		fontFamily: "Ranchers",
	},
	price: {
		padding: "10px 0px",
		fontFamily: "Ranchers",
	},
	button: {
		borderColor: theme.palette.success.light,
		color: theme.palette.success.light,
		textTransform: "none",
		borderRadius: 50,
		fontFamily: "Ranchers",
	},
}));
