import React, { useContext, useState, useEffect } from "react";
import {
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	Avatar,
	IconButton,
	Button,
	Typography,
	makeStyles,
	TextField,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { CartContext } from "../../contexts/CartContext";
import { BusinessContext } from "../../contexts/BusinessContext";

export const OrderRow = (props) => {
	const classes = useStyles();
	const { addProductToOrder, removeProductToOrder, calcRowAmount } =
		useContext(CartContext);
	const { whereIsMyIcon } = useContext(BusinessContext);
	const { product } = props;
	const [quantity, setQuantity] = useState(props.quantity);
	const [amount, setAmount] = useState(props.amount);

	const productToAdd = {
		product: product,
		quantity: quantity,
		amount: amount,
	};

	useEffect(() => {
		const myPrice = product.price;
		setAmount(calcRowAmount(quantity, myPrice));
	}, [quantity]);

	return (
		<>
			<ListItem>
				<ListItemAvatar>
					<Avatar src={whereIsMyIcon(product.category)} />
				</ListItemAvatar>
				<ListItemText primary={product.name} secondary={"$" + product.price} />
				<TextField
					id='row-qty'
					type='number'
					value={quantity}
					onChange={(e) => {
						setQuantity(e.target.value);
						addProductToOrder(productToAdd);
					}}></TextField>
				<Typography variant='h6' component='p'>
					{"$" + amount}
				</Typography>
				<ListItemSecondaryAction>
					<IconButton
						edge='end'
						aria-label='delete'
						onClick={(e) => {
							removeProductToOrder(product.id);
						}}>
						<Delete />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {},
}));
