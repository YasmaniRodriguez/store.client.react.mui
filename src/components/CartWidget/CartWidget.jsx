import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { IconButton, Badge, withStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { CartContext } from "../../contexts/CartContext";

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}))(Badge);

export const CartWidget = (props) => {
	const { totalQuantity } = useContext(CartContext);
	const history = useHistory();

	return (
		<IconButton
			aria-label='cart'
			onClick={(e) => {
				history.push(`/cart`);
			}}>
			<StyledBadge badgeContent={totalQuantity} color='secondary'>
				<ShoppingCart
					style={{ fontSize: "clamp(2.25rem,100%,5rem)", cursor: "pointer" }}
				/>
			</StyledBadge>
		</IconButton>
	);
};
