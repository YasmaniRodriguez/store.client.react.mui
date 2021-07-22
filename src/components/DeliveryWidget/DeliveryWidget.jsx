import React from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { LocalShipping } from "@material-ui/icons";

export const DeliveryWidget = (props) => {
	const history = useHistory();

	return (
		<IconButton
			aria-label='delivery'
			onClick={(e) => {
				history.push(`/cart`);
			}}>
			<LocalShipping
				style={{ fontSize: "clamp(2.25rem,100%,5rem)", cursor: "pointer" }}
			/>
		</IconButton>
	);
};
