import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "black",
		position: "fixed",
		bottom: 0,
		textAlign: "center",
		width: "100%",

		"& p": {
			color: "white",
		},
	},
}));

export const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.container}>
			<div>
				<Typography variant='h3' component='p'>
					Seginos en nuestras redes
				</Typography>
			</div>
			<div>
				<Facebook style={{ color: "white" }} />
				<Instagram style={{ color: "white" }} />
				<YouTube style={{ color: "white" }} />
			</div>
			<div>
				<Typography variant='h5' component='p'>
					Todos los derechos reservados
				</Typography>
			</div>
		</footer>
	);
};
