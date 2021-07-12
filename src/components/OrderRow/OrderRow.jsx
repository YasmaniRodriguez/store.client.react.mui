import React, { useContext, useState, useEffect } from "react";
import {
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	Avatar,
	IconButton,
	Typography,
	makeStyles,
	TextField,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { CartContext } from "../../contexts/CartContext";
import { BusinessContext } from "../../contexts/BusinessContext";

export const OrderRow = (props) => {
	const classes = useStyles();
	const { order, addProductToOrder, removeProductToOrder, calcRowAmount } =
		useContext(CartContext);
	const { whereIsMyIcon } = useContext(BusinessContext);
	const { product, quantity, amount } = props;
	const myPrice = product.price;

	const [myQuantity, setMyQuantity] = useState(quantity);
	const [myAmount, setMyAmount] = useState(amount);

	// const productToAdd = {
	// 	product: product,
	// 	quantity: myQuantity,
	// 	amount: myAmount,
	// };

	useEffect(() => {
		setMyAmount(calcRowAmount(myQuantity, myPrice));
	}, [myQuantity]);

	const quantityChange = (e) => {
		setMyQuantity(parseInt(e.target.value));
	};

	useEffect(() => {
		async function getProductToAdd() {
			const newAmount = await calcRowAmount(myQuantity, myPrice);
			const productToAdd = {
				product: product,
				quantity: myQuantity,
				amount: newAmount,
			};
			addProductToOrder(productToAdd);
		}
		getProductToAdd();
	}, [myQuantity]);

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
