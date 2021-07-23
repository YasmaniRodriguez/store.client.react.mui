import React, { useState } from "react";
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

export const Tracking = ({ setOrderToCheck }) => {
	const classes = useStyles();
	const [myOrder, setMyOrder] = useState();
	const changeOrderToCheck = (e) => {
		setMyOrder(e.target.value);
	};

	return (
		<section className={classes.container}>
			<article className={classes.messageContainer}>
				<Typography variant='h5' component='p'>
					Si ya tenés una, acá podés verificar su estado:
				</Typography>
				<TextField
					required
					id='searchOrder'
					variant='outlined'
					value={myOrder}
					onChange={changeOrderToCheck}
				/>
				<Button
					onClick={(e) => {
						setOrderToCheck(myOrder);
					}}>
					Buscar Orden
				</Button>
			</article>
		</section>
	);
};
