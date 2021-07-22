import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
	Button,
	Typography,
	makeStyles,
	CircularProgress,
	TextField,
	Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { CartContext } from "../../contexts/CartContext";
import { Cart } from "../../components/Cart/Cart";
import { DialogComponent } from "../../components/Dialog/Dialog";
import { db } from "../../firebase/firebase";

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

const containerStyle = {
	width: "100%",
	height: "100%",
	display: "flex",
	justifyContent: "center",
};

export const CartContainer = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const { cart, order, setOrder, totalAmount } = useContext(CartContext);
	const [orderToCheck, setOrderToCheck] = useState("");
	const [checkOrder, setCheckOrder] = useState({});
	const [openDialog, setOpenDialog] = useState(false);
	const [openSnackbar, setOpenSnackbar] = useState(false);

	const changeOrderToCheck = (e) => {
		setOrderToCheck(e.target.value);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSnackbar(false);
	};

	const getOrder = () => {
		const query = db.collection("orders").doc(orderToCheck);
		query
			.get()
			.then((doc) => {
				if (!doc.exists) {
					setOpenSnackbar(true);
				} else {
					setCheckOrder({ id: doc.id, ...doc.data() });
					setOpenDialog(true);
				}
			})
			.catch((error) => console.log(error));
	};

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
							Ups! aún no hay productos en la Orden.
						</Typography>
						<Typography variant='h5' component='p'>
							Si ya tenés una, acá podés verificar su estado:
						</Typography>
						<TextField
							required
							id='searchOrder'
							variant='outlined'
							value={orderToCheck}
							onChange={changeOrderToCheck}
						/>
						{orderToCheck ? (
							<Button
								onClick={(e) => {
									getOrder();
								}}>
								Buscar Orden
							</Button>
						) : (
							<Button
								onClick={(e) => {
									history.push(`/`);
								}}>
								Seguir comprando
							</Button>
						)}
					</article>
				) : (
					<article className={classes.messageContainer}>
						<Typography variant='h3' component='p'>
							Orden Aprobada!
						</Typography>
						<Typography variant='h4' component='p'>
							Podés darle seguimiento con el código:
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
			<div style={containerStyle}>
				<DialogComponent
					open={openDialog}
					openDialog={setOpenDialog}
					handleConfirm={() => setOpenDialog(false)}
					closeDialog={() => setOpenDialog(false)}
					title={`Orden: ${orderToCheck}`}
					labelPrimaryButton='Aceptar'>
					<Typography>Estado: En Preparación</Typography>
					<Typography>Monto: {checkOrder.totalAmount}</Typography>
				</DialogComponent>
			</div>
			<div>
				<Snackbar
					open={openSnackbar}
					autoHideDuration={6000}
					onClose={handleClose}>
					<Alert onClose={handleClose} severity='error'>
						La Orden {orderToCheck} no existe!
					</Alert>
				</Snackbar>
			</div>
		</section>
	);
};
