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
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { CartContext } from "../../contexts/CartContext";
import { BusinessContext } from "../../contexts/BusinessContext";

export const OrderRow = (props) => {
	const classes = useStyles();
	const { addProductToOrder, removeProductToOrder } = useContext(CartContext);
	const { whereIsMyIcon } = useContext(BusinessContext);

	const [quantity, setQuantity] = useState(props.quantity);
	const [amount, setAmount] = useState(props.amount);

	const { product } = props;

	return (
		<>
			<ListItem>
				<ListItemAvatar>
					<Avatar src={whereIsMyIcon(product.category)} />
				</ListItemAvatar>
				<ListItemText primary={product.name} secondary={"$" + product.price} />
				<Typography variant='h6' component='p'>
					{quantity}
				</Typography>
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
