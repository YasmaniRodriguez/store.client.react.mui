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
							height: "100vh",
							width: "100%",
						}}>
						<CircularProgress />
						<Typography variant='h3' component='p'>
							Aguarda un momento por favor, ya estamos enviando tu Orden al
							Proveedor...
						</Typography>
					</div>
				) : order === "" ? (
					<article className={classes.messageContainer}>
						<Typography variant='h4' component='p'>
							Lo sentimos, pero no agregaste productos a la carrito aún.
						</Typography>
						<Button
							style={{ margin: "20px 0px" }}
							onClick={(e) => {
								history.push(`/`);
							}}>
							Ok, vamos de compras
						</Button>
					</article>
				) : (
					<article className={classes.messageContainer}>
						<Typography variant='h3' component='p'>
							Felicitaciones! tu Orden fue aprobada!
						</Typography>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								padding: "20px 0px",
							}}>
							<Typography variant='h4' component='p'>
								Ya podés hacerle seguimiento con el código:
							</Typography>
							<Typography
								variant='h5'
								component='p'
								style={{ color: "rgb(252 174 158)", margin: "10px 0px" }}>
								{order}
							</Typography>
						</div>

						<Button
							onClick={(e) => {
								history.push(`/`);
								setOrder("");
							}}>
							Quiero hacer otro pedido
						</Button>
					</article>
				)
			) : (
				<Cart cart={cart} totalAmount={totalAmount} />
			)}
		</section>
	);
};
