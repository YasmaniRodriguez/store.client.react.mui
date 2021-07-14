import React, { useState, useContext, useEffect, Fragment } from "react";
import {
	makeStyles,
	Typography,
	TextField,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	List,
	Grid,
	Avatar,
	IconButton,
	Button,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { BusinessContext } from "../../contexts/BusinessContext";
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

export const Cart = () => {
	const classes = useStyles();
	const { cart, totalAmount, buyer, setBuyer, buildNewOrder } =
		useContext(CartContext);
	const [openDialog, setOpenDialog] = useState(false);

	const buyerNameChange = (e) => {
		setBuyer({
			name: e.target.value,
			phone: buyer.phone,
			email: buyer.email,
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
			<OrderBody cart={cart} />
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
						console.log(buildNewOrder());
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

const OrderBody = ({ cart }) => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
				<List>
					{cart
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
								<CartItem index={i} {...row} />
							</Fragment>
						))}
				</List>
			</Grid>
		</Grid>
	);
};

const CartItem = (props) => {
	const classes = useStyles();
	const { addItemToCart, removeItemToCart, calcRowAmount } =
		useContext(CartContext);
	const { whereIsMyIcon } = useContext(BusinessContext);
	const { product, quantity, amount } = props;
	const myPrice = product.price;

	const [myQuantity, setMyQuantity] = useState(quantity);
	const [myAmount, setMyAmount] = useState(amount);

	const quantityChange = (e) => {
		setMyQuantity(parseInt(e.target.value));
	};

	useEffect(() => {
		setMyAmount(calcRowAmount(myQuantity, myPrice));
	}, [myQuantity]);

	useEffect(() => {
		async function getItemToAdd() {
			const newAmount = await calcRowAmount(myQuantity, myPrice);
			const itemToAdd = {
				product: product,
				quantity: myQuantity,
				amount: newAmount,
			};
			addItemToCart(itemToAdd);
		}
		getItemToAdd();
	}, [myQuantity]);

	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar src={whereIsMyIcon(product.category)} />
			</ListItemAvatar>
			<ListItemText primary={product.name} secondary={"$" + product.price} />
			<TextField
				id='row-qty'
				type='number'
				value={myQuantity}
				onChange={quantityChange}></TextField>
			<Typography variant='h6' component='p'>
				{"$" + myAmount}
			</Typography>
			<ListItemSecondaryAction>
				<IconButton
					edge='end'
					aria-label='delete'
					onClick={(e) => {
						removeItemToCart(product.id);
					}}>
					<Delete />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};
