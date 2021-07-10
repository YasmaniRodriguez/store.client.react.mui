import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { CartContext } from "../../contexts/CartContext";
import { OrderDetail } from "../../components/OrderDetail/OrderDetail";

export const OrderViewContainer = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const { order, totalAmount } = useContext(CartContext);

	return (
		<section className={classes.container}>
			{order.length === 0 ? (
				<article>
					<Typography variant='h3' component='p'>
						Ups! aún no hay productos en la orden.
					</Typography>
					<Button
						onClick={(e) => {
							history.push(`/`);
						}}>
						Seguir comprando
					</Button>
				</article>
			) : (
				<OrderDetail order={order} totalAmount={totalAmount} />
			)}
		</section>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		height: "70vh",
		width: "100vw",
	},
}));
