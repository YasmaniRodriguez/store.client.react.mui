export const NavBarStyles = (theme) => {
	return {
		container: {
			backgroundColor: "rgb(63 63 63)",
			padding: "0px",
			"& img": {
				heigth: "40px",
				width: "40px",
			},
			"& p": {
				fontFamily: "Ranchers",
				color: "white",
			},
			"& .navbar-logo": {
				padding: "10px",
				pointerEvent: "none",
			},
			"& .navbarToggler": {
				overflow: "hidden",
				position: "relative",

				"& ul": {
					padding: 0,
					margin: 0,
				},
			},
		},
	};
};
