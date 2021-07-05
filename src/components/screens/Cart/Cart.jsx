import React, { useState, UseEffect, useContext } from "react";
import { List, Button, Typography, Grid, makeStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { BusinessContext } from "../../contexts/BusinessContext";
import { CartContext } from "../../contexts/CartContext";
import { useHistory } from "react-router-dom";
import { OrderRow } from "../../widgets/OrderRow/OrderRow";

export const Cart = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const { getCategoryIcon } = useContext(BusinessContext);
	const { orderRow } = useContext(CartContext);
	const { newOrderRow } = useContext(CartContext);
	const { setNewOrderRow } = useContext(CartContext);
	const { resetNewOrderRow } = useContext(CartContext);
	const { addOrderRow } = useContext(CartContext);
	const { removeOrderRow } = useContext(CartContext);

	return (
		<section>
			{orderRow.length === 0 ? (
				<div>
					<Typography variant='h3' component='p'>
						No hay productos en la orden...
					</Typography>
					<Button
						onClick={(e) => {
							history.push(`/`);
						}}>
						Seguir comprando
					</Button>
				</div>
			) : (
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Typography variant='h3' component='p'>
							Mi Orden
						</Typography>
						<div>
							<List>
								{orderRow.map((row, i) => (
									<React.Fragment key={i}>
										<OrderRow
											index={i}
											{...row}
											icon={getCategoryIcon(row.product.category)}
										/>
									</React.Fragment>
								))}
							</List>
							<Button
								onClick={(e) => {
									history.push(`/`);
								}}>
								Seguir comprando
							</Button>
						</div>
					</Grid>
				</Grid>
			)}
		</section>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {},
}));
