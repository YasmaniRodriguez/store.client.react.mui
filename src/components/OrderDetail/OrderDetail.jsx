import React, { useState, Fragment } from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import { List } from "@material-ui/icons";
import { OrderRow } from "../OrderRow/OrderRow";

export const OrderDetail = ({
	order,
	whereIsMyIcon,
	totalAmount,
	totalQuantity,
}) => {
	const classes = useStyles();

	return (
		<article className={classes.container}>
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
		</article>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
	},
	orderHeader: {
		display: "flex",
		flexDirection: "column",
	},
	orderBody: {
		display: "flex",
		flexDirection: "column",
	},
}));

// const OrderHeader = (props) => {
// 	const orderId = props.orderId;
// 	const currentDateTime = props.currentDateTime;
// 	const customerId = props.customerId;
// 	const totalAmount = props.totalAmount;
// 	const totalQuantity = props.totalQuantity;

// 	return (
// 		<div>
// 			<Typography variant='h4' component='p'>
// 				{`Orden Nro.: ${orderId}`}
// 			</Typography>
// 			<Typography variant='h4' component='p'>
// 				{`Fecha y Hora.: ${currentDateTime}`}
// 			</Typography>
// 			<Typography variant='h4' component='p'>
// 				{`Cliente Nro.: ${customerId}`}
// 			</Typography>
// 			<Typography variant='h4' component='p'>
// 				{`Monto Total: ${totalAmount}`}
// 			</Typography>
// 			<Typography variant='h4' component='p'>
// 				{`Cantidad Total: ${totalQuantity}`}
// 			</Typography>
// 		</div>
// 	);
// };
