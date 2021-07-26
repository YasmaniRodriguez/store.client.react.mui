import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
	Button,
	Typography,
	makeStyles,
	CircularProgress,
} from "@material-ui/core";
import { CartContext } from "../../contexts/CartContext";
import { Cart } from "../../components/Cart/Cart";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "10px 20px",
		minHeight: "100vh",
		border: "solid 5px red",
	},
	messageContainer: {
		width: "100%",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));

export const CartContainer = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const { cart, order, setOrder, totalAmount } = useContext(CartContext);

	return (
		<section className={classes.container}>
			{cart.length === 0 ? (
				order === "awaiting" ? (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
							width: "100%",
						}}>
						<CircularProgress />
						<Typography variant='h3' component='p'>
							Enviando Orden al Proveedor...
						</Typography>
					</div>
				) : order === "" ? (
					<article className={classes.messageContainer}>
						<Typography variant='h3' component='p'>
							No hay productos en la Órden aún.
						</Typography>
						<Button
							onClick={(e) => {
								history.push(`/`);
							}}>
							Ir a comprar
						</Button>
					</article>
				) : (
					<article className={classes.messageContainer}>
						<Typography variant='h3' component='p'>
							Orden Aprobada!
						</Typography>
						<Typography variant='h4' component='p'>
							Tu Nro. de Órden es:
						</Typography>
						<Typography variant='h5' component='p'>
							{order}
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
