import React, { useState, Fragment } from "react";
import { Typography, makeStyles, Grid, List } from "@material-ui/core";
import { OrderRow } from "../OrderRow/OrderRow";

export const OrderDetail = ({ order, totalAmount, whereIsMyIcon }) => {
	const classes = useStyles();

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
						{order.map((obj, i) => (
							<Fragment key={i}>
								<OrderRow
									index={i}
									{...obj}
									icon={whereIsMyIcon(obj.product.category)}
								/>
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
