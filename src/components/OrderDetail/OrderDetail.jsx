import React, { useContext, Fragment } from "react";
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

export const OrderDetail = () => {
	const classes = useStyles();
	const { order, totalAmount } = useContext(CartContext);

	return (
		<article className={classes.container}>
			<div className={classes.header}>
				<TextField id='buyer-name' label='Nombre' variant='outlined' />
				<TextField id='buyer-phone' label='Teléfono' variant='outlined' />
				<TextField id='buyer-email' label='E-mail' variant='outlined' />
			</div>
			<OrderBody order={order} />
			<div className={classes.footer}>
				<Typography variant='h5' component='p'>
					Monto:
				</Typography>
				<Typography variant='h5' component='p'>
					{totalAmount}
				</Typography>
			</div>
			<Button variant='outlined'>Enviar orden</Button>
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
