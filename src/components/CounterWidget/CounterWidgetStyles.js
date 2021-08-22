export const CounterWidgetStyles = (theme) => {
	return {
		container: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			"& .MuiAvatar-colorDefault": { backgroundColor: "orange" },
			"& :disabled": {
				"& .MuiAvatar-colorDefault": { backgroundColor: "#bdbdbd" },
			},
		},
		counter: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		button: {
			display: "flex",
			flexDirection: "column",
			padding: "0px 5px",
		},
		cta: {
			padding: "1px 1px",
		},
	};
};
