import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { BusinessContext } from "../../contexts/BusinessContext";
import { CartContext } from "../../contexts/CartContext";
import { OrderDetail } from "../../components/OrderDetail/OrderDetail";

export const OrderViewContainer = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const { whereIsMyIcon } = useContext(BusinessContext);
	const {
		order,
		addProductToOrder,
		removeProductToOrder,
		totalAmount,
		totalQuantity,
	} = useContext(CartContext);

	// useEffect(() => {
	// 	console.log(totalAmount);
	// 	console.log(totalQuantity);
	// 	console.log(order);
	// }, [order]);

	return (
		<section>
			{order.length === 0 ? (
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
				<OrderDetail
					order={order}
					addProductToOrder={addProductToOrder}
					removeProductToOrder={removeProductToOrder}
					totalAmount={totalAmount}
					totalQuantity={totalQuantity}
					whereIsMyIcon={whereIsMyIcon}
				/>
			)}
		</section>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {},
}));
