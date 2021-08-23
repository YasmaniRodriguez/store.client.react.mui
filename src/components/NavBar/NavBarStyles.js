export const NavBarStyles = (theme) => {
	return {
		container: {
			backgroundColor: "rgb(63 63 63)",
			padding: "0px",
			"& img": {
				heigth: "3vw",
				width: "3vw",
			},
			"& p": {
				fontFamily: "Ranchers",
				color: "white",
			},
			"& .navbar-logo": {
				padding: "10px",
				pointerEvent: "none",
				"& p": {
					fontSize: "2.5rem",
				},
			},
			"& #navbarSupportedContent": {
				"& ul": {
					width: "100%",
					justifyContent: "space-between",
					"& li": {
						"& a": {
							display: "flex",
						},
						"& p": {
							textTransform: "capitalize",
						},
					},
				},
			},
		},
	};
};
