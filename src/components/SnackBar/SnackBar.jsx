import React from "react";
import { Snackbar, makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { SnackBarStyles } from "./SnackBarStyles";

const useStyles = makeStyles((theme) => SnackBarStyles(theme));

export const SnackBarComponent = (props) => {
	const { open, message, openSnackBar } = props;

	const classes = useStyles();

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		openSnackBar(false);
	};

	return (
		<Snackbar
			className={classes.container}
			autoHideDuration={5000}
			open={open}
			message={message}
			onClose={handleClose}>
			<Alert onClose={handleClose} severity='error'>
				{message}
			</Alert>
		</Snackbar>
	);
};
