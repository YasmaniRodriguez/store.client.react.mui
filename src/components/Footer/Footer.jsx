import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";
import { FooterStyles } from "./FooterStyles";

const useStyles = makeStyles((theme) => FooterStyles(theme));

export const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.container}>
			<div className={classes.followUs}>
				<Typography variant='h3' component='p'>
					Seguinos en nuestras redes
				</Typography>
			</div>
			<div className={classes.socialMedia}>
				<Facebook fontSize='large' />
				<Instagram fontSize='large' />
				<YouTube fontSize='large' />
			</div>
			<div className={classes.rights}>
				<Typography variant='h5' component='p'>
					Todos los derechos reservados
				</Typography>
			</div>
		</footer>
	);
};
