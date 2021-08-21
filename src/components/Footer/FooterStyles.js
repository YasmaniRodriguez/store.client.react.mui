export const FooterStyles = (theme) => {
	return {
		container: {
			backgroundColor: "rgb(63 63 63)",
			textAlign: "center",
			width: "100%",
			height: "300px",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",

			"& p": {
				color: "white",
				fontFamily: "Ranchers",
			},
		},
	};
};
