import React, { useContext } from "react";
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

export const OrderRow = (props) => {
	const name = props.product.name;
	const price = props.product.price;
	const myIcon = props.icon;

	const classes = useStyles();

	return (
		<>
			<ListItem>
				<ListItemAvatar>
					<Avatar src={myIcon} />
				</ListItemAvatar>
				<ListItemText primary={name} secondary={"$" + price} />
				<ListItemSecondaryAction>
					<IconButton edge='end' aria-label='delete'>
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
