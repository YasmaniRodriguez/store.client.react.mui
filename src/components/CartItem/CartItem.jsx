import React, { useState, useContext, useEffect } from "react";
import {
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
import "@firebase/firestore";

//const useStyles = makeStyles((theme) => CartStyles(theme));

export const CartItem = (props) => {
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
		<ListItem
			style={{
				display: "flex",
				justifyContent: "space-between",
				margin: "5px 0px",
			}}>
			<div style={{ display: "flex", width: "70%" }}>
				<ListItemAvatar>
					<Avatar src={getMyIcon(product.ctgid)} />
				</ListItemAvatar>
				<ListItemText
					style={{ textTransform: "capitalize", fontFamily: "Ranchers" }}
					primary={product.name}
					secondary={"$" + product.price}
				/>
			</div>

			<div style={{ display: "block", width: "20%" }}>
				<TextField
					id='row-qty'
					type='number'
					value={myQuantity}
					onChange={quantityChange}
					style={{ fontFamily: "Ranchers" }}></TextField>

				<Typography
					variant='h6'
					component='p'
					style={{ fontFamily: "Ranchers" }}>
					{"$" + myAmount}
				</Typography>
			</div>
			<div style={{ display: "block", width: "10%" }}>
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
