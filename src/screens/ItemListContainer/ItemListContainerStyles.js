export const ItemListContainerStyles = (theme) => {
	return {
		container: {
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			backgroundColor: "rgb(253 247 247)",
			"& h5": {
				padding: "5px 0px",
				alignSelf: "center",
				backgroundColor: "rgb(154 151 151)",
				width: "100%",
				textAlign: "center",
				textTransform: "uppercase",
				color: "white",
				fontFamily: "Ranchers",
			},
		},
		loading: {
			width: "100vw",
			height: "100vh",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			"& h3": {
				fontFamily: "Ranchers",
			},
		},
	};
};
