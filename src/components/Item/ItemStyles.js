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
			alignItems: "center",
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
	};
};
