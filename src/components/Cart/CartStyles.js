export const CartStyles = (theme) => {
	return {
		container: {
			height: "100vh",
			display: "grid",
			gap: "1rem",
			gridTemplateColumns: "repeat(auto-fit, minmax(30rem, 1fr))",
			"& h3": { textTransform: "uppercase", fontFamily: "Ranchers" },
			"& p": { textTransform: "capitalize", fontFamily: "Ranchers" },
		},
		list: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: "20px 20px",
			backgroundColor: "white",
			"& :nth-child(0n+2)": {
				width: "100%",
			},
		},
		summary: {
			display: "flex",
			flexDirection: "column",
		},
		purchase: {
			backgroundColor: "white",
			marginBottom: "20px",
			padding: "20px",

			"& p": {
				textTransform: "capitalize",
				color: "rgb(117,117,117)",
			},
		},

		buyer: {
			backgroundColor: "white",
			padding: "20px",
			height: "100%",
			"& .MuiButtonBase-root": {
				backgroundColor: "rgb(249 248 248)",
				fontFamily: "Ranchers",
				marginTop: "10px",
			},
			"& > div": {
				display: "flex",
				flexDirection: "column",
				height: "14em",
				justifyContent: "space-around",
			},
		},
	};
};
