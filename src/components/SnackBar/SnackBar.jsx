import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

export const SnackBarComponent = (props) => {
	const { open, message, openSnackBar } = props;

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		openSnackBar(false);
	};

	return (
		<Snackbar
			autoHideDuration={5000}
			open={open}
			message={message}
			onClose={handleClose}>
			<Alert
				onClose={handleClose}
				severity='error'
				style={{ fontFamily: "Ranchers" }}>
				{message}
			</Alert>
		</Snackbar>
	);
};
