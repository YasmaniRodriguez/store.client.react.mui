import React, { useState, useContext, useEffect } from "react";
import {
	makeStyles,
	Typography,
	TextField,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	Avatar,
	IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { BusinessContext } from "../../contexts/BusinessContext";
import { CartContext } from "../../contexts/CartContext";
import { CartItemStyles } from "./CartItemStyles";
import "@firebase/firestore";

const useStyles = makeStyles((theme) => CartItemStyles(theme));

export const CartItem = (props) => {
	const classes = useStyles();
	const { addItemToCart, removeItemToCart, calcRowAmount } =
		useContext(CartContext);
	const { getMyIcon } = useContext(BusinessContext);
	const { product, quantity, amount } = props;
	const myPrice = product.price;
	const [myQuantity, setMyQuantity] = useState(quantity);
	const [myAmount, setMyAmount] = useState(amount);
	const quantityChange = (e) => {
		const minQty = 1;
		const maxQty = product.stock;
		const curQty = parseInt(e.target.value);
		if (curQty <= minQty) {
			setMyQuantity(minQty);
		} else if (curQty >= maxQty) {
			setMyQuantity(maxQty);
		} else {
			setMyQuantity(curQty);
		}
	};

	useEffect(() => {
		setMyAmount(calcRowAmount(myQuantity, myPrice));
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [myQuantity]);

	return (
		<ListItem className={classes.container}>
			<div className={classes.product}>
				<ListItemAvatar>
					<Avatar src={getMyIcon(product.ctgid)} />
				</ListItemAvatar>
				<ListItemText primary={product.name} secondary={"$" + product.price} />
			</div>

			<div className={classes.amount}>
				<TextField
					id='row-qty'
					type='number'
					value={myQuantity}
					onChange={quantityChange}></TextField>
				<Typography variant='h6' component='p'>
					{"$" + myAmount}
				</Typography>
			</div>
			<div className={classes.action}>
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
			</div>
		</ListItem>
	);
};
