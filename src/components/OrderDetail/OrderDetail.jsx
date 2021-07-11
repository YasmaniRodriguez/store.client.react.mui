import React, { useContext, Fragment } from "react";
import { Typography, makeStyles, Grid, List } from "@material-ui/core";
import { OrderRow } from "../OrderRow/OrderRow";
import { CartContext } from "../../contexts/CartContext";

export const OrderDetail = () => {
	const classes = useStyles();
	const { order, totalAmount } = useContext(CartContext);

	return (
		<article className={classes.container}>
			<div className={classes.header}>
				<Typography variant='h5' component='p'>
					Order Nro:
				</Typography>
				<Typography variant='h5' component='p'>
					1042561
				</Typography>
			</div>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<List className={classes.orderBody}>
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
			<div className={classes.footer}>
				<Typography variant='h5' component='p'>
					Monto:
				</Typography>
				<Typography variant='h5' component='p'>
					{totalAmount}
				</Typography>
			</div>
		</article>
	);
};

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
