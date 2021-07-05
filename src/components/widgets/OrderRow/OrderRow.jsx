import React from "react";
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
import { Folder } from "@material-ui/icons";

export const OrderRow = (props) => {
	const classes = useStyles();

	return (
		<>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<Folder />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary='Item Name' secondary='Item Price' />
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
