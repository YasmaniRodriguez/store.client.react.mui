import React, { useState, useContext, useEffect, Fragment } from "react";
import {
	Typography,
	TextField,
	makeStyles,
	Grid,
	List,
	Button,
} from "@material-ui/core";
import { OrderRow } from "../OrderRow/OrderRow";
import { CartContext } from "../../contexts/CartContext";
import { DialogComponent } from "../Dialog/Dialog";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
	},
	header: {
		display: "flex",
	},
	footer: {
		display: "flex",
	},
}));

const containerStyle = {
	width: "100%",
	height: "100%",
	display: "flex",
	justifyContent: "center",
};

export const OrderDetail = () => {
	const classes = useStyles();
	const { order, totalAmount, totalQuantity, setBuyerOrder } =
		useContext(CartContext);
	const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
	const [openDialog, setOpenDialog] = useState(false);
	const [buyerName, setBuyerName] = useState("");
	const [buyerPhone, setBuyerPhone] = useState("");
	const [buyerEmail, setBuyerEmail] = useState("");

	const buildBuyerOrder = () => {
		return {
			buyer: buyer,
			products: order,
			totalAmount: totalAmount,
			totalQuantity: totalQuantity,
		};
	};

	const buyerNameChange = (e) => {
		setBuyer({
			name: e.target.value,
			phone: { ...buyer.phone },
			email: { ...buyer.email },
		});
	};

	const buyerPhoneChange = (e) => {
		setBuyer({
			name: buyer.name,
			phone: e.target.value,
			email: buyer.email,
		});
	};

	const buyerEmailChange = (e) => {
		setBuyer({
			name: buyer.name,
			phone: buyer.phone,
			email: e.target.value,
		});
	};

	return (
		<article className={classes.container}>
			<div className={classes.header}></div>
			<OrderBody order={order} />
			<div className={classes.footer}>
				<Typography variant='h5' component='p'>
					Monto:
				</Typography>
				<Typography variant='h5' component='p'>
					{totalAmount}
				</Typography>
			</div>
			<div style={containerStyle}>
				<DialogComponent
					open={openDialog}
					disabled={buyer.name === "" || buyer.phone === ""}
					openDialog={setOpenDialog}
					handleConfirm={() => {
						setBuyerOrder(buildBuyerOrder());
						setOpenDialog(false);
					}}
					closeDialog={() => setOpenDialog(false)}
					title='Datos del comprador'
					labelSecondaryButton='Cancelar'
					labelPrimaryButton='Aceptar'>
					<div>
						<TextField
							required
							id='buyerName'
							label='Nombre'
							variant='outlined'
							type='text'
							value={buyer.name}
							onChange={buyerNameChange}
						/>
						<TextField
							required
							id='buyerPhone'
							label='Teléfono'
							variant='outlined'
							type='text'
							value={buyer.phone}
							onChange={buyerPhoneChange}
						/>
						<TextField
							id='buyerEmail'
							label='E-mail'
							variant='outlined'
							type='text'
							value={buyer.email}
							onChange={buyerEmailChange}
						/>
					</div>
				</DialogComponent>
			</div>
			<Button variant='outlined' onClick={(e) => setOpenDialog(true)}>
				Enviar orden
			</Button>
		</article>
	);
};

const OrderBody = ({ order }) => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
				<List>
					{order
						.sort((a, b) => {
							if (a.product.name > b.product.name) {
								return 1;
							}
							if (a.product.name < b.product.name) {
								return -1;
							}
							return 0;
						})
						.map((row, i) => (
							<Fragment key={i}>
								<OrderRow index={i} {...row} />
							</Fragment>
						))}
				</List>
			</Grid>
		</Grid>
	);
};
