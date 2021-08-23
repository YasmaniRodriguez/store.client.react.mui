import React from "react";
import {
	Button,
	makeStyles,
	DialogTitle,
	DialogContent,
	DialogActions,
	Dialog,
} from "@material-ui/core";
import { DialogStyles } from "./DialogStyles";

const useStyles = makeStyles((theme) => DialogStyles(theme));

export const DialogComponent = (props) => {
	const {
		open,
		openDialog,
		title,
		children,
		labelPrimaryButton,
		handleConfirm,
		closeDialog,
		disabled,
	} = props;

	const classes = useStyles();

	const handleClose = () => {
		if (closeDialog) {
			closeDialog();
		}
		openDialog(false);
	};

	return (
		<Dialog
			className={classes.container}
			open={open}
			onClose={(event, reason) => {
				if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
					handleClose(event, reason);
				}
			}}>
			<DialogTitle className={classes.title}>{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions className={classes.actions}>
				<Button onClick={handleConfirm} disabled={disabled}>
					{labelPrimaryButton}
				</Button>
			</DialogActions>
		</Dialog>
	);
};
