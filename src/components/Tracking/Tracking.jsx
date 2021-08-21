import React from "react";
import { Button, Typography, makeStyles, TextField } from "@material-ui/core";
import { TrackingStyles } from "./TrackingStyles";

const useStyles = makeStyles((theme) => TrackingStyles(theme));

export const Tracking = ({
	orderToCheck,
	changeOrderToCheck,
	getOrderTracking,
}) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Typography variant='h4' component='p' style={{ fontFamily: "Ranchers" }}>
				Querés verificar el estado de tu Orden?
			</Typography>
			<TextField
				className={classes.helperTextStyles}
				required
				id='searchMyOrder'
				inputProps={{
					min: 0,
					style: { textAlign: "center", fontFamily: "Ranchers" },
				}}
				value={orderToCheck}
				fullWidth
				helperText='Escribí acá el Nro. de la Orden'
				onChange={changeOrderToCheck}
				style={{ padding: "20px 0px", alignSelf: "center" }}
			/>

			<Button
				disabled={orderToCheck === undefined || orderToCheck === ""}
				style={{ fontFamily: "Ranchers" }}
				variant='outlined'
				onClick={(e) => {
					getOrderTracking();
				}}>
				consultar estado
			</Button>
		</div>
	);
};
