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
		followUs: {
			"& p": {
				fontSize: "clamp(2.75rem,100%,3rem)",
				padding: "5px",
			},
		},
		socialMedia: {
			display: "flex",
			width: "20vw",
			justifyContent: "space-around",
			padding: "10px",
			"& svg": {
				color: "white",
				cursor: "pointer",
			},
		},
		rights: {
			"& p": {
				fontSize: "clamp(1.75rem,100%,3rem)",
				padding: "5px",
			},
		},
	};
};
