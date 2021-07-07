import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { IconButton, Badge, withStyles } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";
import { CartContext } from "../../contexts/CartContext";

export const CartWidget = (props) => {
	const { totalQuantity } = useContext(CartContext);
	const history = useHistory();

	return (
		<>
			<IconButton
				aria-label='cart'
				onClick={(e) => {
					history.push(`/cart`);
				}}>
				<StyledBadge badgeContent={totalQuantity} color='secondary'>
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
