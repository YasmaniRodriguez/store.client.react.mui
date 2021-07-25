import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "rgb(63 63 63)",
		textAlign: "center",
		width: "100%",

		"& p": {
			color: "white",
			fontFamily: "Ranchers",
		},
	},
}));

export const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.container}>
			<div>
				<Typography
					variant='h3'
					component='p'
					style={{ fontSize: "clamp(2.75rem,100%,3rem)", padding: "5px" }}>
					Seguinos en nuestras redes
				</Typography>
			</div>
			<div style={{ padding: "10px" }}>
				<Facebook
					fontSize='large'
					style={{ color: "white", cursor: "pointer" }}
				/>
				<Instagram
					fontSize='large'
					style={{ color: "white", cursor: "pointer", margin: "0px 10px" }}
				/>
				<YouTube
					fontSize='large'
					style={{ color: "white", cursor: "pointer" }}
				/>
			</div>
			<div style={{ padding: "5px" }}>
				<Typography variant='h5' component='p'>
					Todos los derechos reservados
				</Typography>
			</div>
		</footer>
	);
};
