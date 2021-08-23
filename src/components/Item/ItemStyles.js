export const ItemStyles = (theme) => {
	return {
		container: {
			boxSizing: "border-box",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-around",
			height: "100%",
			"& .MuiCardMedia-root": { backgroundSize: "contain" },
		},
		media: {
			height: "10em",
			cursor: "pointer",
		},
		content: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			"& .MuiButtonBase-root": {
				fontFamily: "Ranchers",
			},
		},
		product: {
			textTransform: "uppercase",
			fontFamily: "Ranchers",
		},
		price: {
			padding: "10px 0px",
			fontFamily: "Ranchers",
		},
		button: {
			borderColor: theme.palette.success.light,
			color: theme.palette.success.light,
			textTransform: "none",
			borderRadius: 50,
		},
	};
};
