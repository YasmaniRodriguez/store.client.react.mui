import React from "react";
import { Button, Typography, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "10px 20px",
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
		<div className={classes.container}>
			<Typography variant='h5' component='p'>
				Ya tenés una Órden y querés verificar su estado?
			</Typography>
			<TextField
				required
				id='searchMyOrder'
				variant='outlined'
				value={orderToCheck}
				onChange={changeOrderToCheck}
				style={{ padding: "20px 0px" }}
				placeholder='Nro. de Orden'
			/>
			<Button
				disabled={orderToCheck === undefined || orderToCheck === ""}
				onClick={(e) => {
					getOrderTracking();
				}}>
				Consultar estado
			</Button>
		</div>
	);
};
