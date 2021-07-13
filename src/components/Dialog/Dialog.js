import React from "react";
import {
	Button,
	makeStyles,
	DialogTitle,
	DialogContent,
	DialogActions,
	Dialog,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		"& .MuiPaper-root": {
			padding: "1em !important",
			borderRadius: "1em !important",
		},
		"& .MuiDialogTitle-root": {
			paddingBottom: "0 !important",
		},
		"& .MuiDialogActions-root": {
			marginTop: "1em",
		},
	},
	actions: {
		display: "flex",
		justifyContent: "center",
		"& button": {
			lineHeight: "2.65em",
			height: "2.5em",
			minWidth: "8em!important",
			borderRadius: "1.5em!important",
			textTransform: "capitalize",
		},
		"& button:nth-child(1)": {
			backgroundColor: "#fff!important",
			border: ".1em solid #0d47a1!important",
			color: "#0d47a1!important",
		},
		"& button:nth-child(2)": {
			color: "#fff",
			backgroundColor: "#0d47a1",
			"&:disabled": {
				backgroundColor: "#174da082 !important",
			},
		},
	},
	title: { paddingBottom: "0 !important" },
}));

export const DialogComponent = (props) => {
	const {
		open,
		openDialog,
		title,
		children,
		labelPrimaryButton,
		labelSecondaryButton,
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
		<Dialog className={classes.container} open={open} onClose={handleClose}>
			<DialogTitle className={classes.title}>{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions className={classes.actions}>
				<Button onClick={handleClose}>{labelSecondaryButton}</Button>
				<Button onClick={handleConfirm} disabled={disabled}>
					{labelPrimaryButton}
				</Button>
			</DialogActions>
		</Dialog>
	);
};
