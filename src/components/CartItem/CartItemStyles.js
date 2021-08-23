export const CartItemStyles = (theme) => {
	return {
		container: {
			display: "flex",
			justifyContent: "space-between",
			margin: "5px 0px",
			"& .MuiTypography-root, p, input": {
				textTransform: "capitalize",
				fontFamily: "Ranchers",
			},
		},
		product: {
			display: "flex",
			width: "70%",
		},
		amount: {
			display: "block",
			width: "20%",
		},
		action: {
			display: "block",
			width: "10%",
		},
	};
};
