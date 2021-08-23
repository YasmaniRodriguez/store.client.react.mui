export const CartContainerStyles = (theme) => {
	return {
		container: {
			padding: "10px 20px",
			minHeight: "100vh",
			backgroundColor: "rgb(253 247 247)",
			"& p": {
				fontFamily: "Ranchers",
			},
			"& .MuiButton-label": {
				fontFamily: "Ranchers",
			},
			"& h5": {
				fontFamily: "Ranchers",
				color: "rgb(252 174 158)",
				margin: "10px 0px",
			},
		},
		messageContainer: {
			width: "100%",
			height: "100vh",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			"& button": { margin: "20px 0px" },
		},
	};
};
