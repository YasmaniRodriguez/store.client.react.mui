import React, { useState, useEffect, useContext } from "react";
import { IconButton, Badge, withStyles } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";
import { CartContext } from "../../contexts/CartContext";

export const CartWidget = (props) => {
	const { orderRow } = useContext(CartContext);
	const [totalOfItems, setTotalOfItems] = useState(0);

	useEffect(() => {
		const total = orderRow.length;
		setTotalOfItems(total);
	}, [orderRow]);

	return (
		<>
			<IconButton aria-label='cart'>
				<StyledBadge badgeContent={totalOfItems} color='secondary'>
					<ShoppingBasket style={{ fontSize: 40, cursor: "pointer" }} />
				</StyledBadge>
			</IconButton>
		</>
	);
};

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}))(Badge);
