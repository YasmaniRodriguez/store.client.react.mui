import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { CartContext } from "../../contexts/CartContext";
import { Cart } from "../../components/Cart/Cart";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "70vh",
		width: "100vw",
	},
}));

export const CartContainer = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const { cart, order, setOrder, totalAmount } = useContext(CartContext);

	return (
		<section className={classes.container}>
			{cart.length === 0 ? (
				order === "" ? (
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
					<article>
						<Typography variant='h3' component='p'>
							Tu numero de orden es: {order}
						</Typography>
						<Button
							onClick={(e) => {
								history.push(`/`);
								setOrder("");
							}}>
							Hacer otro pedido
						</Button>
					</article>
				)
			) : (
				<Cart cart={cart} totalAmount={totalAmount} />
			)}
		</section>
	);
};
