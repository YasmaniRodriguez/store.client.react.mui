import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
	Toolbar,
	AppBar,
	Typography,
	makeStyles,
	withStyles,
	Badge,
	IconButton,
	Chip,
	Avatar,
	useMediaQuery,
} from "@material-ui/core";
import { CartWidget } from "../CartWidget/CartWidget";
import { Menu } from "@material-ui/icons";
import { BusinessContext } from "../../contexts/BusinessContext";
/*
implementar componente chip para las categorias
implementar hamburg menu para las dimensiones mobile
*/
export const NavBar = (props) => {
	const { availableCategories } = useContext(BusinessContext);
	const route = "/category/";

	const classes = useStyles();

	const matchesMobile = useMediaQuery("(max-width: 800px)");

	return (
		<>
			<header className={classes.container}>
				<Link to={"/"}>
					<Typography variant='h2'>Yeah!</Typography>
				</Link>
				<CartWidget />
			</header>
			{!matchesMobile && (
				<nav className={classes.container}>
					{availableCategories.map((category, i) => (
						<Link to={`${route}${category.ctgid}`}>
							<Typography variant='h4'>{category.name}</Typography>
						</Link>
					))}
				</nav>
			)}
		</>
	);
};

const buttonCommonStyles = {
	alignSelf: "center",
	marginRight: "1em",
	fontSize: "1.2em",
	borderRadius: "50px",
	color: "white",
	padding: "0.5em 1em",
	cursor: "pointer",
	transition: "opacity 0.2s ease",
	textTransform: "none",
	background: "none",
};

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "black",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		"& > button": {
			...buttonCommonStyles,
			"&:hover": {
				background: "none",
			},
			"& h2": {
				fonSize: "clamp(2rem,100%,3.75rem)",
				color: "white",
				fontFamily: "Ranchers",
			},
		},
	},
	categories: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		"& > button": {
			...buttonCommonStyles,
			"&:hover": {
				background: "none",
				textTransform: "uppercase",
			},
			"& h4": {
				fonSize: "clamp(2rem,100%,3.75rem)",
				color: "white",
				fontFamily: "Ranchers",
			},
		},
	},
	cart: {
		...buttonCommonStyles,
	},
}));
