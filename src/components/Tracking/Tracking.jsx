import React from "react";
import { Button, Typography, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "10px 20px",
	},
	messageContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));

export const Tracking = ({
	orderToCheck,
	changeOrderToCheck,
	getOrderTracking,
}) => {
	const classes = useStyles();

	return (
		<section className={classes.container}>
			<article className={classes.messageContainer}>
				<Typography variant='h5' component='p'>
					Si tenés una Órden, acá podés verificar su estado:
				</Typography>
				<TextField
					required
					id='searchMyOrder'
					variant='outlined'
					value={orderToCheck}
					onChange={changeOrderToCheck}
				/>
				<Button
					onClick={(e) => {
						getOrderTracking();
					}}>
					Buscar
				</Button>
			</article>
		</section>
	);
};
